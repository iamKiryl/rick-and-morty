import React from 'react';
import styled from 'styled-components';

const Container = (props) => {
    return (
        <ContainerDiv>
            {props.children}
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    align-items: top;
    justify-content: space-between;
`;

export default Container;
