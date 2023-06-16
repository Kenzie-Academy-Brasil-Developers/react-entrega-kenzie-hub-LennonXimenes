import Header from "../../components/Header";
import { FontParagraph, FontTitle } from "../../styles/typograph";

import { StyledContainer, StyledSection } from "./styled";

function DashboardPage({ user }) {
    const token = localStorage.getItem("@TOKEN");
    const student = localStorage.getItem("@USERID");
    
    return (
        <>
            <Header />
            <StyledSection>
                <StyledContainer>
                    <FontTitle>Olá, {user.name}</FontTitle>
                    <FontParagraph>Você está no {user.course_module}, bons estudos!</FontParagraph>
                </StyledContainer>
            </StyledSection>

            <StyledSection>
                <StyledContainer>
                    <FontTitle>Que pena! Estamos em desenvolvimento :/</FontTitle>
                    <FontParagraph>Nossa aplicação está em desenvolvimento, em breve teremos novidades!</FontParagraph>
                </StyledContainer>
            </StyledSection>
        </>
    )
}

export default DashboardPage;