import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsFillShiftFill} from "react-icons/bs";


export const DetailsDiv = styled.div`
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 2rem;
    border-radius: 5px;
    position: relative;
`; 

export const ArrowLink = styled(Link)`
    color: darkgreen;
    width: 50px;
    height: 50px;
    position: absolute;
    left: -7rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 430px){
        left: -4rem;
    }
`;
export const Arrow = styled(BsFillShiftFill)`
    transform: rotate(270deg) scale(1.3);
`;