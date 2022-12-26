import styled from "styled-components";

export const Container = styled.div`
    width: 630px;
    height: 56px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 10px;

    >input{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        padding-top: 16px;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;
    }
`;