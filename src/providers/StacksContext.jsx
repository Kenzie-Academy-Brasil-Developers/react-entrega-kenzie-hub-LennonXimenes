import { useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { useEffect } from "react";

export const StackContext = createContext({});

function StackProvider({ children }) {
    const [stack, setStack] = useState([]);
    

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@USERID");
        const userStack = async () => {
            try {
                const { data } = await api.get(`/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setStack(data.techs);
            } catch (error) {
                console.error(error);
            }
        }
        userStack();
    }, []);

    async function createStack(currentData) {
        try {
            const token = localStorage.getItem("@TOKEN");
            const { data } = await api.post("/users/techs", currentData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setStack((prevStack) => [...prevStack, data]);
        } catch (error) {
            console.error(error);
        }
    }

    async function deleteStack(techID) {
        try {
            const token = localStorage.getItem("@TOKEN");
            await api.delete(`/users/techs/${techID}` , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const newStack = stack.filter(tech => tech.id !== techID);
            setStack(newStack);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <StackContext.Provider value={{ stack, createStack, deleteStack }}>
            {children}
        </StackContext.Provider>
    )
}

export default StackProvider;