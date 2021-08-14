import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
color: #2F4F4F;
list-style: none;
text-align: center;
font-size: 18px;
width: 100%;
li+li{
    margin-top: 8px;
}
`;

export const ListLink = styled(Link)`
    color: #2F4F4F;
    text-decoration: none;
`;

export const Li = styled.li`
max-width: 400px;
font-weight: 600;
margin: 0 auto;
background-color: rgba(255, 255, 255, 0.6);;
border-radius: 10px;
@media screen and (max-width: 680px){
    margin: 0 auto;
}
`

export const ArrowsDiv = styled.div`
    max-width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`; 