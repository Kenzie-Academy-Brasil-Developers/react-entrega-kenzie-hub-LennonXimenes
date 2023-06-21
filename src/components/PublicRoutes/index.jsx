import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes() {
    const { user } = useContext(UserContext);

    return !user ? <Outlet /> : <Navigate to="/dashboardpage" />
}

export default PublicRoutes;