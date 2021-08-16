import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BsFillShiftFill} from "react-icons/bs";


export const DetailsDiv = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.8);
    padding: .5rem .5rem;
    border-radius: 5px;
    position: relative;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
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
    margin-left: .7rem;
    margin-right: .7rem;
    flex-direction: column;
    justify-content: center;
`;

export const DetailsLink = styled(Link)`
    color: darkgreen;
    text-decoration: none;
`;

export const ArrowLink = styled(Link)`
    color: darkgreen;
    width: 50px;
    height: 50px;
    position: absolute;
    left: -2.6rem;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
    transition: all .2s ease-in;
    &:hover{
        color: #FFFF00;
    }
`;
export const Arrow = styled(BsFillShiftFill)`
    transform: rotate(270deg) scale(1.3);
`;

export const StatusDiv = styled.div`
    padding-left: 1rem;
    position: relative;
    &::before{
        content: '';
        position: absolute;
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: ${({statusDote}) => (statusDote ? 'green' : 'red')};;
    }
`;

export const Title = styled.h3`
    font-size: 1.5rem;
`;