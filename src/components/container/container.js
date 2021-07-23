import React from 'react';
import styled from 'styled-components';

const Container = ({itemList}) => {
    return (
        <ContainerDiv>
            {itemList}
        </ContainerDiv>
    )
}

const ContainerDiv = styled.div`
    display: flex;
    align-items: top;
    justify-content: space-between;
`;

export default Container;
