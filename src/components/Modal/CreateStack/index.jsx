import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StackContext } from "../../../providers/StacksContext";
import { StyledForm, StyledModal, StyledTitleButton } from "../style";
import { FontLabel, FontTitle } from "../../../styles/typograph";
import X from "../../../assets/X.png"
import { useRef } from "react";
import { useEffect } from "react";

function Modal({ children, setIsOpen }) {
    const { register, handleSubmit } = useForm();

    const { createStack } = useContext(StackContext);

    const modalRef = useRef(null);

    useEffect(() => {
        function handleOutClick(e) {
            if (!modalRef.current?.contains(e.target)) {
                setIsOpen(false);
            }
        }
        window.addEventListener("mousedown", handleOutClick);

        return () => {
            window.removeEventListener("mousedown", handleOutClick);
        }
    }, [])

    const buttonRef = useRef(null);

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                buttonRef.current?.click();
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    function submit(currentData) {
        const data = { ...currentData };
        createStack(data);
        setIsOpen(false);
    }

    return (
        <StyledModal role="dialog">
            <div ref={modalRef} className="container">

                <StyledTitleButton>
                    <FontTitle>Cadastrar Tecnologia</FontTitle>
                    <button ref={buttonRef} onClick={() => setIsOpen(false)}><img src={X} /></button>
                </StyledTitleButton>

                <StyledForm onSubmit={handleSubmit(submit)}>
                    <FontLabel font="big">Nome</FontLabel>
                    <input {...register("title")} />
                    <FontLabel font="big">Selecionar Status</FontLabel>
                    <select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <button type="submit" className="register">Cadastrar Tecnologia</button>
                </StyledForm>
                {children}
            </div>
        </StyledModal >
    )
}

export default Modal;