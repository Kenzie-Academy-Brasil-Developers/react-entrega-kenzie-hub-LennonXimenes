import Header from "../../components/Header";
import { FontParagraph, FontTitle } from "../../styles/typograph";

import { StyledBox, StyledContainer, StyledContainerTitleBtn, StyledSection } from "./styled";
import btn from "../../assets/btn.png"

import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

function DashboardPage() {
    const { user } = useContext(UserContext);

    return (
        <>
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
                        <button><img src={btn} alt="Sinal de mais" /></button>
                    </StyledContainerTitleBtn>

                    <StyledBox>

                    </StyledBox>

                </StyledContainer>
            </StyledSection>
        </>
    )
}

export default DashboardPage;