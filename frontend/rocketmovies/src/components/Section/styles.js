import styled from "styled-components";

export const Container = styled.section`

    background: #0D0C0F;

    margin: 24px 0;
    padding: 16px;

    h2 {
        border-bottom: 1px solid;
        border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

        padding-bottom: 16px;
        margin-bottom: 20px;

        color: ${({theme}) => theme.COLORS.GRAY_100};

        font-size: 20px;
        font-weight: 400;

    }
`;
