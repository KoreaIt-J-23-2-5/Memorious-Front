/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { Reset } from "styled-reset";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
/** @jsxImportSource @emotion/react */
import { HiSearch } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { Pagination, Select, Table } from "antd";
import * as S from "./style";
import { instance } from "../../config";

function BoardList() {
    const navigate = useNavigate();
    const { category, page } = useParams();

    const options = [
        { value: "전체", label: "전체" },
        { value: "제목", label: "제목" },
        { value: "작성자", label: "작성자" },
    ];

    const [categoryList, setCategoryList] = useState([]);

    // 카테고리 리스트 가져오기
    useEffect(() => {
        instance.get("/api/board/categories").then(response => {
            setCategoryList(
                response.data.map(categoryData => {
                    return {
                        id: categoryData.boardCategoryId,
                        value: categoryData.boardCategoryName,
                    };
                }),
            );
        });
    }, []);

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const search = {
        optionName: options[0].label,
        searchValue: "",
    };
    const [searchParams, setSearchParams] = useState(search);

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");

    if (!principalState?.data?.data) {
        alert("로그인 후 이용 바랍니다.");
        window.location.replace("/auth/oauth2/signin");
    }

    const [boardList, setBoardList] = useState([]);

    const getBoardList = useQuery(
        ["getBoardList", category, page],
        async () => {
            try {
                const option = {
                    params: searchParams,
                    headers: {
                        Authorization: localStorage.getItem("accessToken"),
                    },
                };
                const response = await instance.get(`api/boards/${category}/${page}`, option);
                setBoardList(response.data);
            } catch (error) {
                throw new Error(error);
            }
        },
        {
            retry: 0,
            refetchOnWindowFocus: false,
        },
    );

    // 검색창 내용 바뀔 때
    const handleSearchInputChange = e => {
        setSearchParams({
            ...searchParams,
            searchValue: e.target.value,
        });
    };

    // 선택 옵션(제목/작성자) 바뀔 때
    const handleSearchOptionSelect = value => {
        setSelectedOption(value);
        setSearchParams({
            ...searchParams,
            optionName: value,
        });
    };

    // 검색 버튼 클릭
    const handleSearchButtonClick = () => {
        navigate(`/board/${category}/1`);
        getBoardList.refetch();
    };

    const handleOnKeyPress = e => {
        if (e.key === "Enter") {
            handleSearchButtonClick();
        }
    };

    /** antd table */
    const columns = [
        {
            title: "번호", // 타이틀(보여짐)
            dataIndex: "boardId", // 객체의 키값
            key: "boardId", // 키
            onHeaderCell: () => ({
                style: {
                    background: "#6F6257",
                    color: "#fffbf5",
                    textAlign: "center",
                    fontSize: "16px",
                    width: "10%",
                },
            }),
        },
        {
            title: "제목",
            dataIndex: "title",
            key: "title",
            onHeaderCell: () => ({
                style: {
                    background: "#6F6257",
                    color: "#fffbf5",
                    textAlign: "center",
                    fontSize: "16px",
                    width: "50%",
                },
            }),
        },
        {
            title: "작성자",
            dataIndex: "nickname",
            key: "author",
            onHeaderCell: () => ({
                style: {
                    background: "#6F6257",
                    color: "#fffbf5",
                    textAlign: "center",
                    fontSize: "16px",
                    width: "20%",
                },
            }),
        },
        {
            title: "작성일",
            dataIndex: "createDate",
            key: "createDate",
            onHeaderCell: () => ({
                style: {
                    background: "#6F6257",
                    color: "#fffbf5",
                    textAlign: "center",
                    fontSize: "16px",
                    width: "15%",
                },
            }),
        },
    ];

    const customPagination = {
        defaultCurrent: 1,
        defaultPageSize: 7,
    };
    const onRow = (record, index) => {
        return {
            onClick: e => {
                navigate(`/board/${record.boardId}`);
            },
        };
    };

    // 링크로 이동시 해당 링크값 받아옴
    const location = useLocation();
    const currentPath = decodeURIComponent(location.pathname);

    return (
        <>
            <Reset />
            <div css={S.layout}>
                <div css={S.writeAndSearchBox}>
                    <div
                        css={S.writeBoardBox}
                        onClick={() => {
                            navigate("/board/write");
                        }}
                    >
                        <AiOutlinePlus size={20} />
                        <span>글쓰기</span>
                    </div>
                    <div css={S.searchContainer}>
                        <Select style={{ width: 150, height: 40 }} options={options} value={selectedOption} onChange={handleSearchOptionSelect} />
                        <input css={S.searchInput} type="text" onChange={handleSearchInputChange} onKeyDown={handleOnKeyPress} />
                        <div className="icon-box" onClick={handleSearchButtonClick}>
                            <HiSearch size={20} />
                        </div>
                    </div>
                </div>
                <div css={S.categoryBox}>
                    <Link key={0} to="/board/all/1" css={currentPath === "/board/all/1" ? S.categoryClick : S.category}>
                        <div>전체</div>
                    </Link>

                    {/* 카테고리 목록 가져오기 */}
                    {categoryList.map(categoryData => {
                        return (
                            <>
                                <Link key={categoryData.id} to={`/board/${categoryData.value}/1`} css={currentPath === `/board/${categoryData.value}/1` ? S.categoryClick : S.category}>
                                    <div>{categoryData.value}</div>
                                </Link>
                            </>
                        );
                    })}
                </div>
                <Table columns={columns} className="ant-table" dataSource={boardList} onRow={onRow} pagination={customPagination} />
            </div>
        </>
    );
}

export default BoardList;
