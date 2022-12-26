import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: rgba(255, 133, 155, 0.05);

    border: none;
    border-radius: 10px;
    
    padding: 22px;
    margin-bottom: 16px;

    span{
        background-color: #312E38;;
    }

    >h1{
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({theme}) => theme.COLORS.WHITE };

        margin-bottom: 8px;

    }

    >p{
        text-align: justify;
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        font-size: 16px;
        line-height: 21.1px;
        
        color: ${({theme}) => theme.COLORS.GRAY_300 };
    }

    >footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;