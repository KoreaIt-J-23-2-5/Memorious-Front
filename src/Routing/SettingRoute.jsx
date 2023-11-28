import React from "react";
import { Route, Routes } from "react-router-dom";
import MyFamily from "../pages/MyFamily/MyFamily";
import Mypage from "../pages/Mypage/Mypage";

function SettingRoute() {
    return (
        <Routes>
            <Route path="myfamily" element={<MyFamily />} />
            <Route path="mypage" element={<Mypage />} />
        </Routes>
    );
}

export default SettingRoute;
