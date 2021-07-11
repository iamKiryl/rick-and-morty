import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsFillPuzzleFill } from "react-icons/bs";

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.8);
    margin-bottom: 20px;
    padding: 5px 20px;
    border-radius: 0 0 10px 10px;
    transition: .3s ease-in;
    @media screen and (max-width: 680px){
        padding-bottom: ${({navlist}) => (navlist ? '12rem' : '0rem')};
    }
`;
export const Ul = styled.ul`
    list-style: none;
    display: flex;
    max-width: 400px;
    width: 100%;
    justify-content: space-between;
    a{
        font-size: 26px;
    }
    li{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li+li{
        margin-left: 10px;
    }
    @media screen and (max-width: 680px){
        max-width: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        top: ${({navlist}) => (navlist ? '0rem' : '-15rem')};
        padding-top: 4rem;
        right: 50%;
        transform: translateX(50%);
        transition: .3s ease-in;
        height: 13rem;
        li+li{
            margin-left: 0;     
        }
    }  
`;

export const IconDiv = styled.div`
    display: none;
    @media screen and (max-width: 680px){
        display: flex;
        justify-content: center;
        align-items: center;
    } 
`;

export const IconPuzzle = styled(BsFillPuzzleFill)`
    color: ${({navlist}) => (navlist ? '#FFFF00' : 'darkgreen')};
    width: 3rem;
    height: 2rem;
    transition: .3s ease-in;
    cursor: pointer;
    z-index: 1000;
    transform: ${({navlist}) => (navlist ? 'rotate(90deg)' : 'rotate(0deg)')};
    &:hover{
        transition: .3s ease-in;
        color: #FFFF00;
    }
`;

export const LogoHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled(Link)`
    color: darkgreen;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.8rem;
    z-index: 1000;

`;

export const HeaderLink = styled(Link)`
    color: darkgreen;
    text-decoration: none;
`;