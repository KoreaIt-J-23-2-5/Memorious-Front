import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import ReactQuill from "react-quill";
import { Select } from "antd";
import * as S from "./style";
import { instance } from "../../config";
/** @jsxImportSource @emotion/react */

function BoardWrite() {
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

    if (!principalState?.data?.data) {
        alert("로그인 후 이용 바랍니다.");
        window.location.replace("/auth/oauth2/signin");
    }

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

    // 셀렉트 옵션을 클릭하면 selectedOption을 set 해줌
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

    // 게시글 작성 submit
    const handleWriteSubmit = async () => {
        if (boardData.categoryId === null) {
            alert("카테고리를 선택해주세요.");
            return;
        }
        if (!window.confirm("게시글을 작성하시겠습니까?")) {
            return;
        }
        try {
            await instance.post("api/board/content", boardData);
            alert("게시글 작성이 완료되었습니다.");
            navigate("/board");
        } catch (error) {
            alert("게시글 업로드에 실패하였습니다.");
            console.log(error.response.data);
        }
    };
    console.log(boardData);
    return (
        <>
            <div css={S.layout}>
                <div css={S.categoryContainer}>
                    <div css={S.selectBox}>
                        <Select style={{ width: "150px", height: "40px" }} options={options} onChange={handleSelectChange} value={selectedOption} placeholder="카테고리 선택" />
                    </div>
                    <button css={S.addCategory} onClick={handleAddCategory}>
                        카테고리 추가
                    </button>
                </div>
                <div>
                    <input css={S.titleInput} type="text" name="title" placeholder="제목" onChange={handleTitleInput} />
                </div>
                {/* 게시글쓰기 라이브러리 */}
                <ReactQuill className="quill-container" modules={modules} onChange={handleContentInput} />
                <div css={S.buttonContainer}>
                    <button css={S.writeBoardButton} onClick={handleWriteSubmit}>
                        글 작성하기
                    </button>
                </div>
            </div>
        </>
    );
}

export default BoardWrite;
