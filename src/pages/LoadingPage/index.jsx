import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontTitle } from "../../styles/typograph";

function LoadingPage({ isLoading, setIsLoading }) {
    const navigate = useNavigate();
    useEffect(() => {
            setTimeout(() => {
                navigate("/dashboardpage");
            }, 1 * 1500);

            return () => {
                setIsLoading(true);
            }
    }, []);

    return (
        <>
            {isLoading && (
                <div>
                    <FontTitle>Loanding..</FontTitle>
                </div>
            )}
        </>
    );
}

export default LoadingPage;