/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import FamilyInfo from "../../component/FamilyInfo/FamilyInfo";
import { instance } from "../../config";
import { FamilyContainer, FamilyList, editFamilyButton, myFamilyHeader, subTitle } from "./style";
/** @jsxImportSource @emotion/react */

function MyFamily() {
    const [userList, setUserList] = useState([]);
    const [familyInfo, setFamilyInfo] = useState({});
    const queryClient = useQueryClient();

    // if (!principalState?.data?.data) {
    //     alert("로그인 후 이용 바랍니다.");
    //     window.location.replace("/auth/oauth2/signin");
    // }
    // 로그인한 유저의 family_id
    const principal = queryClient.getQueryState(["getPrincipal"]);
    console.log("principal", principal);
    const familyId = principal?.data.data.familyId;

    const getfamilyInfo = async () => {
        const response = await instance.get(`/api/family/${familyId}`);
        setFamilyInfo(response.data);
    };
    const getUserList = async () => {
        const response = await instance.get("/api/chart/family", { params: { familyId: principal?.data.data.familyId } });
        setUserList(response.data);
    };
    useEffect(() => {
        getUserList();
        getfamilyInfo();
    }, []);

    console.log("familyInfo", familyInfo);
    console.log("userList", userList);
    return (
        <>
            <div css={FamilyContainer}>
                <div>
                    <div css={myFamilyHeader}>
                        <p css={subTitle}>우리 가족 정보</p>
                        <button css={editFamilyButton}>가족 프로필 수정</button>
                    </div>
                    <FamilyInfo value={userList.familyName} />
                </div>
                <p css={subTitle}>우리 가족 구성원</p>
                <div css={FamilyList}>
                    {userList.map(member => (
                        <FamilyInfo key={member.userId} isButton value={member.nickname} owner={member.isOwner === 1} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MyFamily;
