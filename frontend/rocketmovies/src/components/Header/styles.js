import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    height: 116px;
    width: 100%;

    border-bottom: 1px solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    align-items: center;

    justify-content: space-between;
    padding: 0 123px;
`;

export const Profile = styled(Link)`

    display: flex;
    align-items: center;

    > img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    > div{
        display: flex;
        flex-direction: column;
        line-height: 24px;
        padding: 9px;

        strong{
            font-size: 18px;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }
`;

export const Logout = styled.button`
    display: flex;
    justify-content: end;
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.GRAY_300};
`;

export const Brand = styled.div`
    font-weight: 700;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};

    display: flex;
    align-items: center;
`;

