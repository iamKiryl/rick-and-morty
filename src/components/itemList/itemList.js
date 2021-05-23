import React, { Component } from 'react';
import styled from 'styled-components';

class ItemList extends Component {

    state = {
        itemsList: null
    }
    componentDidMount(){
        const {getData} = this.props;
        getData().then((itemsList) => {
            this.setState({itemsList})
        })
    }

    renderItems(arr){
        return arr.map(item => {
            return (
                <Li key={item.id}>{item.name}</Li>
            )
        })
    }
    
    
    render(){
        const {itemsList} = this.state;
        if (!itemsList) return null

        const items = this.renderItems(itemsList);
        return (
            <Ul>
                {items}
            </Ul>  
        );
    }
}

const Ul = styled.ul`
    color: #2F4F4F;
    list-style: none;
    text-align: center;
    font-size: 18px;
    max-width: 300px;
    li+li{
        margin-top: 8px;
    }
`;

const Li = styled.li`
    font-weight: 600;
    background-color: rgba(255, 255, 255, 0.6);
    ;
    border-radius: 10px;
`

export default ItemList;