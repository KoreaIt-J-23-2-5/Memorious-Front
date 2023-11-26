import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { instance } from "../../config";
import { boardDetailBox, boardDetailContainer, contentWrapper } from "./style";
/** @jsxImportSource @emotion/react */

function BoardDetail() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");
    const { boardId } = useParams();
    const [board, setBoard] = useState({});

    const getBoard = useQuery(
        ["getBoard"],
        async () => {
            try {
                const response = await instance.get(`api/board/${boardId}`);
                return response;
            } catch (error) {
                alert("해당 게시글을 불러올 수 없습니다.");
                navigate("/board/all/1");
            }
        },
        {
            refetchOnWindowFocus: false,
            onSuccess: response => {
                setBoard(response.data);
            },
        },
    );

    // 게시글 수정

    // 게시글 삭제
    const handleBoardDeleteClick = async () => {
        if (!window.confirm("정말로 게시글을 삭제하시겠습니까?")) {
            return;
        }

        try {
            await instance.delete(`api/board/${boardId}`);
            alert("게시글이 삭제되었습니다.");
            navigate("/board");
        } catch (error) {
            alert("게시글 삭제 중 오류가 발생하였습니다.");
        }
    };

    if (getBoard.isLoading) {
        return <></>;
    }
    return (
        <div css={boardDetailBox}>
            <div css={boardDetailContainer}>
                <div className="categoryName">{board.boardCategoryName}</div>
                <div className="detail-header-top">
                    <p>{board.boardTitle}</p>
                </div>
                <div className="detail-header-bottom">
                    <div className="header-bottom-left">
                        <div className="profile-img">
                            <img src={board.profileUrl} alt="" />
                        </div>
                        <div className="nickname-and-date">
                            <div>{board.nickname}</div>
                            <div>
                                <p>{board.createDate}</p>
                            </div>
                        </div>
                    </div>
                    {principalState?.data?.data?.nickname === board.nickname && (
                        <div className="header-bottom-right">
                            <button onClick={() => navigate(`/board/edit/${boardId}`)}>수정</button>
                            <button onClick={handleBoardDeleteClick}>삭제</button>
                        </div>
                    )}
                </div>
            </div>
            <div />
            <div css={contentWrapper} dangerouslySetInnerHTML={{ __html: board.boardContent }} />
        </div>
    );
}

export default BoardDetail;
