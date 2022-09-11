import React from "react";
import "./Navbar.css";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <nav className="bg-secondary">
            <ul>
                <NavbarItem
                    key={0}
                    icon="person-circle"
                    title="Profile"
                    path="/profile"
                />
                <NavbarItem
                    key={1}
                    icon="files"
                    title="Quizzes"
                    path="/quizzes"
                />
                <NavbarItem
                    key={2}
                    icon="file-earmark-plus"
                    title="Add quiz"
                    path="/addQuiz"
                />
            </ul>
        </nav>
    );
}
