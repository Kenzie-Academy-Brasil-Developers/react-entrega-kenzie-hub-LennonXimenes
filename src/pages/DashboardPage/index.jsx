import Header from "../../components/Header";
import { FontParagraph, FontTitle } from "../../styles/typograph";

import { StyledContainer, StyledSection } from "./styled";

function DashboardPage() {
    const name = "Lennon Ximenes";
    const module = "M4"

    return (
        <>
            <Header />
            <StyledSection>
                <StyledContainer>
                    <FontTitle>Olá, {name}</FontTitle>
                    <FontParagraph>Você está no {module}, bons estudos!</FontParagraph>
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