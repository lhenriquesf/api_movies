import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800 };
    color: ${({theme}) => theme.COLORS.WHITE};

    border-radius: 5px;
    font-size: 14px;
    line-height: 14px;
    padding: 5px 14px;
    margin-right: 6px;
`;