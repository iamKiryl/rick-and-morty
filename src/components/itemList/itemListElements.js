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

`;

export const Li = styled.li`
font-weight: 600;
background-color: rgba(255, 255, 255, 0.6);
;
border-radius: 10px;
`