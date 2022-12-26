import styled from "styled-components";

export const Container = styled.div`


    .block-with-text {
        max-height: 222px;
        position: relative;
        text-align: justify;
    }

    .block-with-text p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    >main{

        max-width: 1137px;

        margin: auto;

        div{
            display: flex;
            justify-content: space-between;

            margin-top: 47px;
            margin-bottom: 41px;

            >h1{
                line-height: 42px;
                font-weight: 400;
            }

            >button{
                border-radius: 8px;
                border: none;
                padding: 15px 25px;
                background-color: ${({theme})=>theme.COLORS.PINK};
            }
        }
    }
`;