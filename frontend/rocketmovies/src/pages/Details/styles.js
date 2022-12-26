import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    >main{
        padding: 0 123px;

        margin-top: 40px;

        span{
            span{
                margin-right: 8px;
                display: flex;
                align-items: center;

                font-size: 16px;
            }
        }

        div{
            margin: 40px 0;
        }

        h1{
            margin-bottom: 24px;
            font-size: 36px;
            line-height: 47.48px;
        }

        p{
            text-align: justify;
            display: flex;
            align-items: center;
            margin-bottom: 24px;

            font-size: 16px;
            line-height: 21.1px;

            img{
                width: 16px;
                height: 16px;
                border-radius: 50%;
                margin-right: 8px;
            }
        }

        a{
            color: ${({theme})=>theme.COLORS.PINK};
            display: flex;
            align-items: center;
            margin-bottom: 24px;
        }
    }

`;
