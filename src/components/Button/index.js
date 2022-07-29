import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
background: transparent;
border-radius: 5px;
border: 2px solid black;
color: black;
margin:   5px 1em;
padding: 0.25em 1em;`

const Button = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;