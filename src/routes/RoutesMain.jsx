import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LoadingPage from "../pages/LoadingPage";
import DashboardPage from "../pages/DashboardPage";

import { useEffect, useState } from "react";
import { api } from "../services/api";

function RoutesMain() {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadUsers() {
            try {
                const response = await api.get("/users");
            } catch (error) {
                console.error(error);
            }
        }
        loadUsers();
    }, [])

    return (
        <Routes>
            <Route path="/" element={<LoginPage user={user} setUser={setUser} />} />
            <Route path="/registerpage" element={<RegisterPage />} />
            <Route path="loadingpage" element={<LoadingPage isLoading={isLoading} setIsLoading={setIsLoading} />}  />
            <Route path="/dashboardpage" element={<DashboardPage user={user}/>} />
        </Routes>
    )

}

export default RoutesMain;