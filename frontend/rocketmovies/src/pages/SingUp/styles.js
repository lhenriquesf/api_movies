import styled from "styled-components";
import backgroundImg from "../../assets/background.jpg";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;


export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    section{
        margin-bottom: 24px;
    }

    >h1{
        color: ${({theme})=> theme.COLORS.PINK};

        font-weight: 700;
        font-size: 48px;
        line-height: 63px;
    }

    >p{
        color: ${({theme})=> theme.COLORS.GRAY_100};

        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }

    >h2{
        color: ${({theme})=> theme.COLORS.WHITE};

        margin: 48px 0;

        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
    }

    a{  
        color: ${({theme})=> theme.COLORS.PINK};

        margin-top: 42px;
        display: flex;
        align-items: center;
    }
`;


export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;