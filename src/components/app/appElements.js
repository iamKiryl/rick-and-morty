import styled from 'styled-components';
import image from './background.png';

export const AppBlock = styled.div`
    width: 100%;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
`
export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
`