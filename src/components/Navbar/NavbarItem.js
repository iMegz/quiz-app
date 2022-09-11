import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavbarItem.css";

export default function NavbarItem({ icon, title, path }) {
    const location = useLocation();
    console.log();
    return (
        <li className={location.pathname === path ? "active" : ""}>
            <Link className="link" to={path}>
                <i className={"bi bi-" + icon}></i>
                <span>{title}</span>
            </Link>
        </li>
    );
}
