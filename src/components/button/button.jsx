import React from "react";
import { StyledButton } from "./styled";

export const Button = ({children, disable, background = "var(--btn-gradient)" , secondary, radius = "32"}) => {
    return (
        <StyledButton 
        disabled = {disable}
        secondary = {secondary}
        radius ={radius}
        background = {background}
        >
            {children}
        </StyledButton>
    )
}