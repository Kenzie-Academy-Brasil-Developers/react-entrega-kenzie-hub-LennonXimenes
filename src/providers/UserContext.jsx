import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toastSuccess, toastSuccessLogin } from "../components/Toast";

export const UserContext = createContext({});

function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    async function createUser(formData) {
        try {
            const { data } = await api.post("/users", formData);
            toastSuccess()
            navigate("/")
        } catch (error) {
            console.error(error);
            toastError()
        }
    };

    async function userLogin(formData) {
        try {
            const { data } = await api.post("/sessions", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.user.id);
            setUser(data.user);
            toastSuccessLogin();
            navigate("/loadingpage");
        } catch (error) {
            console.error(error);
            toastErrorLogin()
        }
    }

    function userLogout() {
        localStorage.clear();
        setUser(null);
        navigate("/");
    }

    function useReturn() {
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ user, createUser, userLogin, userLogout, useReturn }}>
            {children}
        </UserContext.Provider>
    )

}
export default UserProvider;