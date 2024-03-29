import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LoadingPage from "../pages/LoadingPage";
import DashboardPage from "../pages/DashboardPage";

import { useEffect, useState } from "react";
import { api } from "../services/api";
import ProtectedRoutes from "../components/ProtectedRoutes";
import PublicRoutes from "../components/PublicRoutes";
import StackProvider from "../providers/StacksContext";

function RoutesMain() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function users() {
            try {
                const response = await api.get("/users");
            } catch (error) {
                console.error(error);
            }
        }
        users();
    }, [])

    return (

        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="/registerpage" element={<RegisterPage />} />
                <Route path="/loadingpage" element={<LoadingPage />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboardpage" element={
                    <StackProvider>
                        <DashboardPage />
                    </StackProvider>
                } />
            </Route>
        </Routes>

    )

}

export default RoutesMain;