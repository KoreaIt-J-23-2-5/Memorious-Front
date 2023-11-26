import React from "react";
import FamilyInfo from "../../component/FamilyInfo/FamilyInfo";
import { FamilyContainer, FamilyList, editFamilyButton, myFamilyHeader, subTitle } from "./style";
/** @jsxImportSource @emotion/react */

function MyFamily() {
    // 더미 데이터
    const members = [
        {
            userId: 45,
            nickname: "아빠",
            userProfileUrl: "",
            isOwner: 1,
        },
        {
            userId: 45,
            nickname: "엄마",
            userProfileUrl: "",
            isOwner: 0,
        },
        {
            userId: 45,
            nickname: "나",
            userProfileUrl: "",
            isOwner: 0,
        },
    ];

    return (
        <>
            <div css={FamilyContainer}>
                <div>
                    <div css={myFamilyHeader}>
                        <p css={subTitle}>우리 가족 정보</p>
                        <button css={editFamilyButton}>가족 프로필 수정</button>
                    </div>
                    <FamilyInfo value="가족이름" />
                </div>
                <p css={subTitle}>구성원</p>
                <div css={FamilyList}>
                    {members.map(member => (
                        <FamilyInfo key={member.userId} isButton value={member.nickname} owner={member.isOwner === 1} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MyFamily;
