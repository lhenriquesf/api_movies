import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;

    >header{
        background: rgba(255, 133, 155, 0.05);
        width: 100%;
        height: 144px;

        display: flex;
        align-items: center;

        padding-left: 124px;

        >a{
            color: ${({theme})=> theme.COLORS.PINK};
            display: flex;
            align-items: center;
        }
    }
`;


export const Form = styled.form`

    margin-left: 33.5%;

    >div:nth-child(3){
        margin-top: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;

    width: 186px;
    height: 186px;

    >img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    >label{
        width: 48px;
        height: 48px;

        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input{
            display: none;
        }

        svg{
            width: 20px;
            height: 20px;

            color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        }
    }
`;
