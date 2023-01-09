import styled from "styled-components";

export const Container = styled.textarea`
    width: 1113px;
    height: 274px;



    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    color: ${({theme}) => theme.COLORS.WHITE};

    border: none;
    resize: none;
    border-radius: 10px;

    margin-bottom: 8px;
    padding: 16px;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`;
