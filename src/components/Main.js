import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./Main.css";
import HomePage from "./pages/HomePage";
import AddQuizPage from "./pages/AddQuizPage";
import QuizzesPage from "./pages/QuizzesPage";
import ProfilePage from "./pages/ProfilePage";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/addQuiz" element={<AddQuizPage />} />
                <Route path="/quizzes" element={<QuizzesPage />} />
            </Routes>
        </main>
    );
}
