import styled, { css } from "styled-components";

export const fonts = css`
    font-family: var(--font-primary);
`

export const FontTitle = styled.h1`
    ${fonts};
    font-size: .9063rem;
    font-weight: 700;
    color: var(--color--grey-0);
`

export const FontLabel = styled.label`
    ${fonts};
    font-size: .625rem;
    font-weight: 400;
    color: var(--color--grey-0);
`

export const FontParagraph = styled.p`
    ${fonts};
    font-size: .625rem;
    font-weight: 400;
    color: var(--color--grey-1);
`
