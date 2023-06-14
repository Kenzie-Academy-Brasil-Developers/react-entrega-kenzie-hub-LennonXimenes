import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

import { useEffect } from "react";
import { api } from "../services/api";

function RoutesMain() {

    useEffect(() => {
        async function loadUsers() {

            try {
                const response = await api.get("/users");
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        loadUsers();
    }, [])

    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/registerpage" element={<RegisterPage />}/>
            <Route path="/dashboardpage" element={<DashboardPage />}/>
        </Routes>
    )

}

export default RoutesMain;