import React from "react";
import defaultProfileImg from "../../assets/NicePng_watsapp-icon-png_9332131.png";
import { familyImgBox, familyListText, familyText, goOutButton, ownerText, userBox, userContainer, userHeaderbox, userImgBox, userListContainer } from "./style";
/** @jsxImportSource @emotion/react */

function FamilyInfo({ isButton, value, owner }) {
    return (
        <div css={isButton ? userListContainer : userContainer}>
            <div css={isButton ? userBox : userHeaderbox}>
                <div css={isButton ? familyImgBox : userImgBox}>
                    <img src={defaultProfileImg} alt="defaultUser" />
                </div>
                <div css={isButton ? familyListText : familyText}>
                    <p>{value}</p>
                    {owner && <p css={ownerText}>방장</p>}
                </div>
            </div>
            {isButton && (
                <div css={goOutButton}>
                    <button>내보내기</button>
                </div>
            )}
        </div>
    );
}

export default FamilyInfo;
