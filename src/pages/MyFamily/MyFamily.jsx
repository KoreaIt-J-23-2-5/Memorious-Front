/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import FamilyInfo from "../../component/FamilyInfo/FamilyInfo";
import { instance } from "../../config";
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
    ];

    const [familyInfo, setFamilyInfo] = useState({
        familyId: 0,
        familyName: "",
        familyProfileUrl: "",
    });
    const [familyMemberInfo, setFamilyMemberInfo] = useState([]);
    const queryClient = useQueryClient();
    const principalState = queryClient.getQueryState("getPrincipal");

    if (!principalState?.data?.data) {
        alert("로그인 후 이용 바랍니다.");
        window.location.replace("/auth/oauth2/signin");
    }
    // 로그인한 유저의 family_id
    const userFamilyId = principalState?.data?.data?.familyId;

    useEffect(() => {
        try {
            instance.get(`/api/myfamily`, { params: { familyId: userFamilyId } }).then(response => {
                setFamilyInfo(response.data);
            });
        } catch (error) {
            console.error(error.response.data);
        }
    }, []);
    console.log("familyInfo >> ", familyInfo);

    useEffect(() => {
        try {
            instance.get(`/api/myfamily/members`, { params: { familyId: userFamilyId } }).then(response => {
                setFamilyMemberInfo(response.data);
            });
        } catch (error) {
            console.error(error.response.data);
        }
    });
    return (
        <>
            <div css={FamilyContainer}>
                <div>
                    <div css={myFamilyHeader}>
                        <p css={subTitle}>우리 가족 정보</p>
                        <button css={editFamilyButton}>가족 프로필 수정</button>
                    </div>
                    <FamilyInfo value={familyInfo.familyName} />
                </div>
                <p css={subTitle}>우리 가족 구성원</p>
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
