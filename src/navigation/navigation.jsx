import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Join from "../components/Join/Join";
import RoomChat from "../components/RoomChat/RoomChat";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Join />} />
            <Route path="/chatRoom" element={<RoomChat />} />
        </Routes>
    )
}

export default Navigation;