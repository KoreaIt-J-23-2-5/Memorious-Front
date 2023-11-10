import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { mainContainer, mainLayout } from "../OAuth2Signin/Style";
import * as S from "../OAuth2Signup/Style";
import { instance } from "../../config";

function CreateFamily() {
    const familyInfo = {
        familyName: "",
        familyDomain: "",
    };
    const navigate = useNavigate();
    const [familyData, setFamilyData] = useState(familyInfo);

    const handleInputChange = e => {
        setFamilyData({
            ...familyData,
            [e.target.name]: e.target.value,
        });
    };

    const handleCreateFamily = async () => {
        try {
            console.log(familyData);
            await instance.post("/api/create/family", familyData);
        } catch (error) {
            console.error(error.response);
        }
        navigate("/");
    };
    return (
        <>
            <div css={mainLayout}>
                <div css={mainContainer}>
                    <div css={S.logoBox}>
                        <img src="/assets/images/logo.png" alt="" />
                    </div>
                    <div css={S.introText}>
                        <p>우리 가족을 기억할 공간을 생성하세요</p>
                    </div>
                    <div css={S.inputContainer}>
                        <div css={S.inputBox}>
                            <div>가족 이름</div>
                            <input type="text" css={S.input} onChange={handleInputChange} name="familyName" />
                        </div>

                        <div css={S.inputBox}>
                            <div>
                                페이지
                                <br />
                                도메인
                            </div>
                            <input type="text" css={S.input} onChange={handleInputChange} name="familyDomain" />
                        </div>
                    </div>
                    <button css={S.signupButton} onClick={handleCreateFamily}>
                        가족 생성하기
                    </button>
                    <div>
                        <p>이미 가족에게 초대를 받았다면 초대받은 이메일을 확인해주세요</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateFamily;
