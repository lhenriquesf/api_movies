import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    background-color: ${({theme})=>theme.COLORS.PINK};

    width: 630px;
    height: 48px;

    border-radius: 10px;
`;