import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;


export const Form = styled.form`
    margin: 25px auto;

    width: 1137px;

    h1{
        font-weight: 500;
        font-size: 36px;
        line-height: 47px;

        margin-bottom: 20px;
    }

    a{  
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;

        color: ${({theme})=> theme.COLORS.PINK};
        margin-bottom: 24px;

        display: flex;
        align-items: center;
    }

    main{
        display: flex;
        justify-content: start;
        gap: 40px;

        margin-bottom: 15px;

        button{
            width: 536.5px;
            height: 56px;

            border-radius: 10px;
            border: none;
        }

        .btn-add{
            background-color: ${({theme})=> theme.COLORS.PINK};
            color: #0D0C0F;
        }

        .btn-delete{
            background-color: #0D0C0F;
            color: ${({theme})=> theme.COLORS.PINK};
        }
    }

    .tags{
        display: flex;
        gap: 24px;
        flex: content;
    }
`;