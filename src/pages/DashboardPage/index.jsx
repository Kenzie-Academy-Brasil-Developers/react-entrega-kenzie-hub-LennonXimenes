import Header from "../../components/Header";
import { FontParagraph, FontTitle } from "../../styles/typograph";

import { StyledBox, StyledContainer, StyledContainerTitleBtn, StyledSection } from "./styled";
import btn from "../../assets/btn.png"

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { StackContext } from "../../providers/StacksContext";
import { useState } from "react";
import Modal from "../../components/Modal/CreateStack";
import ModalTwo from "../../components/Modal/EditStack";

function DashboardPage() {
    const { user } = useContext(UserContext);
    const { stack } = useContext(StackContext);

    const [isOpen, setIsOpen] = useState(null);
    const [isOpenTwo, setIsOpenTwo] = useState(null);
    const [currentTech, setCurrentTech] = useState([]);

    function openModal(tech) {
        setIsOpenTwo(true);    
        setCurrentTech(tech);
    }

    return (
        <>
            {isOpen ? <Modal setIsOpen={setIsOpen}></Modal> : null}
            {isOpenTwo ? <ModalTwo setCurrentTech={setCurrentTech} currentTech={currentTech}  setIsOpenTwo={setIsOpenTwo}></ModalTwo> : null}
            <Header />
            <StyledSection>
                <StyledContainer>
                    <FontTitle>Olá, {user?.name}</FontTitle>
                    <FontParagraph>Você está no {user?.course_module}, bons estudos!</FontParagraph>
                </StyledContainer>
            </StyledSection>

            <StyledSection>
                <StyledContainer>

                    <StyledContainerTitleBtn>
                        <FontTitle>Tecnologias</FontTitle>
                        <button onClick={() => setIsOpen(true)}><img src={btn} alt="Sinal de mais" /></button>
                    </StyledContainerTitleBtn>

                    <StyledBox>
                        <ul>
                            {stack.length > 0 ? (
                                stack.map((tech, index) => 
                                        <li onClick={() => openModal(tech)} key={index}>
                                            <FontParagraph font="big" weight="big" color="white">{tech?.title}</FontParagraph>
                                            <FontParagraph>{tech?.status}</FontParagraph>
                                        </li>
                                )
                            ) : (
                                <FontParagraph font="big" weight="big" color="white">Você ainda não possui tecnologias cadastradas</FontParagraph>
                            )
                            }
                        </ul>
                    </StyledBox>

                </StyledContainer>
            </StyledSection>
        </>
    )
}

export default DashboardPage;