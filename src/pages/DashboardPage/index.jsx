import Header from "../../components/Header";
import { FontParagraph, FontTitle } from "../../styles/typograph";

import { StyledContainer, StyledContainerTitleBtn, StyledSection } from "./styled";
import btn from "../../assets/btn.png"

function DashboardPage({ user }) {
    const token = localStorage.getItem("@TOKEN");
    const student = localStorage.getItem("@USERID");

    const filteredTechs = user.techs.filter(tech => tech.title)

    const techs = filteredTechs.map(tech => tech.title)

    const status = filteredTechs.map(stat => stat.status)

    console.log(techs)
    console.log(status)

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

                    <StyledContainerTitleBtn>
                        <FontTitle>Tecnologias</FontTitle>
                        <button><img src={btn} alt="Sinal de mais" /></button>
                    </StyledContainerTitleBtn>

                    

                </StyledContainer>
            </StyledSection>
        </>
    )
}

export default DashboardPage;