import { css } from "@emotion/react";

export const userContainer = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 700px;
    width: 100%;
    border-radius: 10px;
    padding: 15px;
    margin: 30px 0;
    justify-content: space-around;
    background-color: #fffbf5;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const userListContainer = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 700px;
    width: 100%;
    border-radius: 10px;
    padding: 15px;
    margin: 30px 0;
    justify-content: space-around;
    background-color: #fffbf5;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const userBox = css`
    width: 350px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
`;

export const userHeaderbox = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 15px 0;
`;

export const userImgBox = css`
    border-radius: 50%;
    width: 110px;
    height: 100px;
    cursor: pointer;
    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const familyImgBox = css`
    border-radius: 50%;
    width: 55px;
    height: 50px;
    cursor: pointer;
    & > img {
        width: 100%;
        height: 100%;
    }
`;

export const familyText = css`
    display: flex;
    & p {
        font-size: 20px;
        color: #6f6257;
        font-weight: bold;
    }
`;

export const familyListText = css`
    display: flex;
    align-items: center;
    margin-left: 15px;
    & > p:nth-child(1) {
        font-size: 18px;
        color: #6f6257;
    }
`;

export const ownerText = css`
    border: 1px solid #e6a156;
    border-radius: 15px;
    padding: 8px;
    margin-left: 10px;
    background-color: #e6a156;
    font-size: 13px;
    color: #6f6257;
`;

export const goOutButton = css`
    & button {
        padding: 10px;
        border-radius: 15px;
        border: none;
        background-color: #f5efe6;
        color: #6f6257;
        cursor: pointer;
    }
    & button:hover {
        color: #f5efe6;
        background-color: #6f6257;
    }
`;
