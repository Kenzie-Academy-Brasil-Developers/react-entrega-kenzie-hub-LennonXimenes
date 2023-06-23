import { useForm } from "react-hook-form";
import { StyledBtn, StyledForm, StyledModal, StyledTitleButton } from "../style";
import { FontLabel, FontTitle } from "../../../styles/typograph";
import X from "../../../assets/X.png"
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { StackContext } from "../../../providers/StacksContext";

function ModalTwo({ children, setIsOpenTwo, currentTech }) {
    const { register } = useForm();

    const { stack } = useContext(StackContext);
    const { deleteStack } = useContext(StackContext);

    const modalRefTwo = useRef(null);

    useEffect(() => {
        function handleOutClick(e) {
            if (!modalRefTwo.current?.contains(e.target)) {
                setIsOpenTwo(false);
            }
        }
        window.addEventListener("mousedown", handleOutClick);

        return () => {
            window.removeEventListener("mousedown", handleOutClick);
        }
    }, []);

    const buttonRefTwo = useRef(null);

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                buttonRefTwo.current?.click();
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    function closeModal(currentTech) {
        setIsOpenTwo(false);
        deleteStack(currentTech?.id);
    }
    
    return (
        <StyledModal role="dialog">
            <div ref={modalRefTwo} className="container">

                <StyledTitleButton>
                    <FontTitle>Tecnologia Detalhes</FontTitle>
                    <button ref={buttonRefTwo} onClick={() => setIsOpenTwo(false)}><img src={X} /></button>
                </StyledTitleButton>

                <StyledForm>
                    <FontLabel font="big">Nome</FontLabel>
                    <input placeholder={currentTech.title} className="disabled" disabled />
                    <FontLabel font="big">Selecionar Status</FontLabel>
                    <select {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <StyledBtn>
                        <button className="save">Salvar alterações</button>
                        <button type="button" onClick={() => closeModal(currentTech)} className="dlt">Excluir</button>
                    </StyledBtn>
                </StyledForm>
                {children}
            </div>
        </StyledModal>
    )
}

export default ModalTwo;