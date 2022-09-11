import React, { createContext } from "react";

const UserContext = createContext({
    isLoggedIn: false,
    username: "",
    id: "",
});

export function UserCtx() {
    return <div>UserCtx</div>;
}
