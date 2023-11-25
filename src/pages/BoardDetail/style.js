import { css } from "@emotion/react";

export const boardDetailBox = css`
    width: 100%;
    min-width: 800px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & * {
        color: #6f6257;
    }
`;

export const boardDetailContainer = css`
    width: calc(100% - 40px);
    min-width: 800px;
    display: flex;
    flex-direction: column;
    margin: 30px;
    border: 1px solid #6f6257;
    border-radius: 6px;
    padding: 20px;
    background-color: #fffbf5;
    .detail-header-top {
        /* padding: 8px; */
        margin-top: 10px;
        width: 100%;
        /* height: 40px; */
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
        /* justify-content: space-between; */
        /* align-items: center; */
    }
    .profile-img {
        border: 1px solid #ddd;
        border-radius: 50%;
        width: 40px;
        height: 40px;
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
        cursor: pointer;
        & button {
            border: none;
            border-radius: 6px;
            outline: none;
            width: 60px;
            padding: 6px;
            color: #fffbf5;
            background-color: #6f6257;
            font-size: 14px;
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
    width: calc(100% - 40px);
    height: 100%;
    padding: 40px;
    border-radius: 6px;
    border: 1px solid #6f6357;
    margin: 20px;
    pre {
        h1 {
            line-height: 2rem;
            font-size: 2rem;
        }
        p {
            line-height: 1.1rem;
            font-size: 1.1rem;
            width: 100%;
        }
    }
`;
