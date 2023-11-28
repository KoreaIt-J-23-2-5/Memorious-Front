/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import { Select } from "antd";
import { useQuery, useQueryClient } from "react-query";
import { instance } from "../../config";
/** @jsxImportSource @emotion/react */
import * as S from "../BoardWrite/style";

function BoardEdit() {
    const { boardId } = useParams();
    const navigate = useNavigate();
    const [boardData, setBoardData] = useState({
        title: "",
        content: "",
        categoryId: null,
        categoryName: "",
    });

    // 추가할 카테고리
    const [newCategory, setNewCategory] = useState("");
    // 카테고리 옵션리스트
    const [options, setOptions] = useState([]);
    // 선택된 옵션
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");

    useEffect(() => {
        if (!principalState?.data?.data) {
            alert("로그인 후 이용 바랍니다.");
            window.location.replace("/auth/oauth2/signin");
        }
    }, []);

    const getBoardDetail = useQuery(
        ["getBoardDetail"],
        async () => {
            try {
                return await instance.get(`api/board/${boardId}`);
            } catch (error) {
                alert("해당 게시글을 불러올 수 없습니다.");
                navigate("/board");
            }
        },
        {
            refetchOnWindowFocus: false,
            retry: 0,
            onSuccess: response => {
                setBoardData({
                    ...boardData,
                    title: response?.data?.boardTitle,
                    content: response?.data?.boardContent,
                });

                const category = options.filter(option => option.value === response.data.boardCategoryId)[0];
                setSelectedOption(category);
            },
        },
    );

    // get categoryList -> options에 set
    useEffect(() => {
        instance.get("api/board/categories").then(response => {
            setOptions(
                response.data.map(category => {
                    return {
                        value: category.boardCategoryId,
                        label: category.boardCategoryName,
                    };
                }),
            );
        });
    }, []);

    // 카테고리 추가
    const handleAddCategory = () => {
        const categoryName = window.prompt("새로 추가할 카테고리를 입력하세요."); // 모달창으로
        if (!categoryName) {
            return;
        }
        setNewCategory(categoryName);
    };

    useEffect(() => {
        if (newCategory) {
            const newOption = { value: 0, label: newCategory };

            const tempOptions = [...options];
            tempOptions[tempOptions.length] = newOption;

            if (options.map(option => option.value).includes(newOption.value)) {
                const result = options.filter(option => option.value !== 0);
                result.push(newOption);
                setOptions(result);
            } else {
                setOptions([...options, newOption]);
            }
            setSelectedOption(newOption);
        }
    }, [newCategory]);

    // quill
    const modules = {
        toolbar: {
            container: [[{ header: [1, 2, 3, false] }], ["bold", "underline"], ["image"]],
        },
    };

    const handleSelectChange = (value, option) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        setBoardData({
            ...boardData,
            categoryId: selectedOption?.value,
            categoryName: selectedOption?.label,
        });
    }, [selectedOption]);

    const handleTitleInput = e => {
        setBoardData({
            ...boardData,
            title: e.target.value,
        });
    };

    const handleContentInput = value => {
        setBoardData({
            ...boardData,
            content: value,
        });
    };

    const handleEditSubmit = async () => {
        try {
            const option = {
                headers: {
                    Authorization: localStorage.getItem("accessToken"),
                },
            };
            await instance.put(`api/board/${boardId}`, boardData, option);
            alert("게시글 수정이 완료되었습니다.");
            navigate(`/board/${boardId}`);
        } catch (error) {
            console.error(error);
            alert("게시글 수정 중 오류가 발생하였습니다.");
            navigate(`/board/${boardId}`);
        }
    };
    if (getBoardDetail.isLoading) {
        return <></>;
    }

    return (
        <div css={S.layout}>
            <div css={S.categoryContainer}>
                <div css={S.selectBox}>
                    <Select style={{ width: "150px", height: "40px" }} options={options} onChange={handleSelectChange} value={selectedOption} defaultValue={selectedOption} placeholder="카테고리 선택" />
                </div>
                <button css={S.addCategory} onClick={handleAddCategory}>
                    카테고리 추가
                </button>
            </div>
            <div>
                <input css={S.titleInput} type="text" name="title" placeholder="제목" onChange={handleTitleInput} value={boardData.title} />
            </div>
            {/* 게시글쓰기 라이브러리 */}
            <ReactQuill className="quill-container" modules={modules} value={boardData.content} onChange={handleContentInput} />
            <div css={S.buttonContainer}>
                <button css={S.writeBoardButton} onClick={handleEditSubmit}>
                    글 수정하기
                </button>
            </div>
        </div>
    );
}

export default BoardEdit;
