import { StyledInput } from "../../pages/RegisterPage/styled";
import { FontLabel, FontParagraph } from "../../styles/typograph";
import { forwardRef  } from "react";

export const Input = forwardRef(({label, error, ...rest}, ref) => {
    return (
        <>
            <FontLabel>{label}</FontLabel>
            <StyledInput ref={ref} {...rest}/>
            {error ? (
                <FontParagraph>{error.message}</FontParagraph> 
            ) : null}
        </>
    );
});

export default Input;