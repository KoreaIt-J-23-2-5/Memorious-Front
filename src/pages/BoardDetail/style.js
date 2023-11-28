import { css } from "@emotion/react";

export const boardDetailBox = css`
    width: 100%;
    min-width: 200px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & * {
        color: #6f6257;
    }
`;

export const boardDetailContainer = css`
    width: calc(100% - 100px);
    min-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 30px;
    border: 1px solid #6f6257;
    border-radius: 6px;
    padding: 20px;
    background-color: #fffbf5;
    .detail-header-top {
        margin-top: 10px;
        width: 100%;
        & p {
            font-size: 25px;
            font-family: "Pretendard-Medium";
        }
    }
    .detail-header-bottom {
        margin-top: 10px;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header-bottom-left {
        width: 200px;
        display: flex;
    }
    .profile-img {
        border: 1px solid #f5efe6;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        overflow: hidden;
        & img {
            width: 100%;
        }
    }
    .nickname-and-date {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 10px;
    }
    .header-bottom-right {
        & button {
            cursor: pointer;
            margin-left: 10px;
            border: none;
            border-radius: 6px;
            width: 60px;
            padding: 10px;
            outline: none;
            color: #fffbf5;
            font-size: 14px;
            background-color: #6f6257;
        }
    }
    span {
        color: #666;
        /* font-size: 1.2rem; */
        /* width: max-content; */
        padding: 10px;
        &.board-id {
        }
        &.nickname {
        }
        &.date {
            width: 250px !important;
        }
        pre {
            width: 100%;
            min-width: 800px;
            height: 900px;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }
    }
`;
export const contentWrapper = css`
    width: calc(100% - 100px);
    max-height: 500px;
    padding: 40px;
    border-radius: 6px;
    border: 1px solid #6f6357;
    margin: 20px;
    font-size: 30px;
    img {
        width: 60%;
    }
`;
