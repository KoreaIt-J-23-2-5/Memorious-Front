import React from "react";
import { Route, Routes } from "react-router-dom";
import Mypage from "../pages/Mypage/Mypage";
import MyFamily from "../pages/MyFamily/MyFamily";

function SettingRoute() {
    return (
        <Routes>
            <Route path="myfamily" element={<MyFamily />} />
            <Route path="mypage" element={<Mypage />} />
            <Route path="myfamily" element={<></>} />
        </Routes>
    );
}

export default SettingRoute;
