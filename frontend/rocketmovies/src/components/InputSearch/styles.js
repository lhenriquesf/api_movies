import styled from "styled-components";

export const Container = styled.div`
    width: 630px;
    height: 56px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    border-radius: 10px;

    margin-bottom: 8px;

    padding-left: 10px;

    >input{
        width: 90%;
        height: 100%;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;

        padding-left: 10px;
    }
`;