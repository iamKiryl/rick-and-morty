import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsFillShiftFill} from "react-icons/bs";


export const DetailsDiv = styled.div`
    margin: 0 auto;
    display: flex;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 1rem 1.3rem;
    border-radius: 5px;
    position: relative;
    
    @media screen and (max-width: 390px){
        flex-direction: column;
    }
`; 

export const CharImageContainer = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`; 
export const CharImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 5px;
`; 
export const CharInfo = styled.div`
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
    justify-content: center;
`;

export const ArrowLink = styled(Link)`
    color: darkgreen;
    width: 50px;
    height: 50px;
    position: absolute;
    right: 10px;
    top: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 390px){
        right: none;
        left: 10px;
    }
`;
export const Arrow = styled(BsFillShiftFill)`
    transform: rotate(270deg) scale(1.3);
`;