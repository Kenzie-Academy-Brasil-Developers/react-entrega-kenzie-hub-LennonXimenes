import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toastError, toastErrorLogin, toastSuccess, toastSuccessLogin } from "../components/Toast";
import { useEffect } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const currentPath = window.location.pathname;

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");
        const loadUser = async () => {
            try {
                setIsLoading(true)
                const { data } = await api.get(`/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data);
                navigate(currentPath);
            } catch (error) {
                console.error(error);
                localStorage.clear();
            } finally {
                setIsLoading(false);
            }
        }
        if (token && id) {
            loadUser();
        }

    }, []);

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
        <UserContext.Provider value={{ user, createUser, userLogin, userLogout, useReturn, isLoading, setIsLoading }}>
            {children}
        </UserContext.Provider>
    )

}
export default UserProvider;