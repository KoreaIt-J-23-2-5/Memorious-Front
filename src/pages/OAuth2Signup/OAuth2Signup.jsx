/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { mainContainer, mainLayout } from "../OAuth2Signin/style";
import { inputBox, inputContainer, logoBox, signupButton, signupContainer, signupText } from "./style";
import { instance } from "../../config";
/** @jsxImportSource @emotion/react */

function OAuth2Signup() {
    const [searchParams, setSearchParams] = useSearchParams();

    const user = {
        email: "",
        nickname: "",
        oauth2Id: searchParams.get("oauth2Id"),
        provider: searchParams.get("provider"),
    };

    const [signupUser, setSignupUser] = useState(user);

    const handleInputChange = e => {
        setSignupUser({
            ...signupUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignupSubmit = async () => {
        try {
            const response = await instance.post("/api/auth/oauth2/signup", signupUser);
            alert("회원가입 성공");
            localStorage.setItem("accessToken", `Bearer ${response.data}`);
            window.location.replace("/create/family");
        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <>
            <div css={mainLayout}>
                <div css={mainContainer}>
                    <div css={logoBox}>
                        <img src="/assets/images/logo.png" alt="" />
                    </div>
                    <div css={signupText}>
                        <p>
                            추가 정보를 입력하고
                            <br />
                            회원가입을 완료하세요.
                        </p>
                    </div>
                    <div css={signupContainer}>
                        <div css={inputContainer}>
                            <div>이메일</div>
                            <input type="email" css={inputBox} onChange={handleInputChange} name="email" />
                        </div>

                        <div css={inputContainer}>
                            <div>별명</div>
                            <input type="text" css={inputBox} onChange={handleInputChange} name="nickname" />
                        </div>
                    </div>
                    <button css={signupButton} onClick={handleSignupSubmit}>
                        가입하기
                    </button>
                </div>
            </div>
        </>
    );
}

export default OAuth2Signup;
