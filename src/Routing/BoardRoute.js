import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BoardList from "../pages/BoardList/BoardList";
import BoardWrite from "../pages/BoardWrite/BoardWrite";
import BoardDetail from "../pages/BoardDetail/BoardDetail";
import BoardEdit from "../pages/BoardEdit/BoardEdit";

function BoardRoute() {
    return (
        <Routes>
            <Route index element={<Navigate replace to="all/1" />} />
            <Route path="write" element={<BoardWrite />} />
            <Route path=":category/:page" element={<BoardList />} />
            <Route path=":boardId" element={<BoardDetail />} />
            <Route path="edit/:boardId" element={<BoardEdit />} />
        </Routes>
    );
}

export default BoardRoute;
