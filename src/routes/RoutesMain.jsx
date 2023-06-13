import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";

function RoutesMain() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="registerpage" element={<RegisterPage />}/>
            <Route path="dashboardpage" element={<DashboardPage />}/>
        </Routes>
    )

}

export default RoutesMain;