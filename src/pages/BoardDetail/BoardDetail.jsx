import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { instance } from "../../config";
import { boardDetailBox, boardDetailContainer, contentWrapper } from "./style";
/** @jsxImportSource @emotion/react */

function BoardDetail() {
    const dummyObj = {
        boardId: 1,
        boardTitle: "제제목제목목",
        boardContent: (
            <>
                <h1>글 내용 1</h1>
                <p>aaaaaaa</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
            </>
        ),
        nickname: "비누",
        boardCreatedDate: "2023-11-23 03:33:22",
    };
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");
    const { boardId } = useParams();
    const [board, setBoard] = useState({});

    const getBoard = useQuery(
        ["getBoard"],
        async () => {
            try {
                const response = await instance.get(`api/board/${boardId}`); // api
                console.log(response?.data?.data);
                return response;
            } catch (error) {
                alert("해당 게시글을 불러올 수 없습니다.");
                navigate("/board");
            }
        },
        {
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setBoard(response.data);
            },
        },
    );

    // 게시글 삭제
    const handleBoardDeleteClick = async () => {
        if (!window.confirm("정말로 게시글을 삭제하시겠습니까?")) {
            return;
        }

        try {
            await instance.delete(`api/board/${boardId}`); // api
            alert("게시글이 삭제되었습니다.");
            navigate("/");
        } catch (error) {
            alert("게시글 삭제 중 오류가 발생하였습니다.");
            // console.error(error);
        }
    };

    return (
        <div css={boardDetailBox}>
            <div css={boardDetailContainer}>
                <div className="categoryName">카테고리</div>
                <div className="detail-header-top">
                    <p>제목입니다.</p>
                </div>
                <div className="detail-header-bottom">
                    <div className="header-bottom-left">
                        <div className="profile-img">
                            <img src="" alt="" />
                        </div>
                        <div className="nickname-and-date">
                            <div>nickname</div>
                            <div style={{ color: "#888" }}>2023-11-25</div>
                        </div>
                    </div>
                    <div className="header-bottom-right">
                        <button>수정</button> <button onClick={handleBoardDeleteClick}>삭제</button>
                    </div>
                </div>
                {/* <span className="title border-left-box">{dummyObj.boardTitle}</span> */}
                {/* <span className="date">{dayjs(dummyObj.boardCreatedDate).format("YYYY년 MM월 DD일")}</span> */}
            </div>
            <div />
            <div css={contentWrapper}>
                <pre>{dummyObj.boardContent}</pre>
            </div>
        </div>
    );
}

export default BoardDetail;
