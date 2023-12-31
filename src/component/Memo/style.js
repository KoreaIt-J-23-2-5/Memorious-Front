import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Modal } from "antd";

export const memoHeaderContainer = css`
    margin-top: 30px;
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    .input-area {
        flex-grow: 1;
        input {
            outline: none;
            border: none;
            border-bottom: 1px solid #666;
            width: 100%;
            padding: 10px;
        }
        padding: 0 30px;
    }
    .memo-add-area {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .memo-add-icon-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            height: fit-content;
        }
        .memo-add-icon {
            margin-right: 5px;
            font-weight: 700;
        }
        span {
            font-family: "Pretendard-Light";
            font-size: 0.8rem;
        }
    }
    .search-button {
        width: 50px;
        height: 30px;
        background-color: #6f6257;
        border: none;
        border-radius: 6px;
        margin-right: 20px;
        color: #fffbf5;
        font-family: "Pretendard-Light";
        font-size: 0.8rem;
    }
`;

export const memoWrapper = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 900px;
    height: 650px;
    padding: 0 50px 50px 50px;
`;

export const memoBoard = css`
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: #6f6257;
    ::-webkit-scrollbar {
        width: 3px;
        opacity: 0.2;
    }
    ::-webkit-scrollbar-track {
        background-color: #fffbf5;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e6a156;
        height: auto;
        border-radius: 6px;
    }
    .memo-scroll-board {
        width: 100%;
        min-width: 1000px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 50px;
        padding: 50px;
    }
`;

export const memoContent = index => css`
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #666666;
    background-color: ${index % 2 === 0 ? "#FFFBF5" : "#F5EFE6"};
    padding: 0 20px;
    word-wrap: break-word;
    word-break: break-all;
    .author-label {
        width: 100%;
        height: 20px;
        font-size: 0.8rem;
        text-align: left;
        margin: 10px;
    }
    .content-area {
        width: 100%;
        flex-grow: 1;
    }
    .date-label {
        width: 100%;
        margin: 10px;
    }
`;

export const ModalContainer = styled(Modal)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ant-modal-content {
        width: 400px;
    }
    .text-area {
        width: 100%;
    }
`;

export const EditModalContainer = styled(Modal)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .ant-modal-content {
        width: 400px;
    }
    .text-area {
        width: 100%;
    }
`;
