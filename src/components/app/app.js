import React from 'react';
import styled from 'styled-components';
import image from './background.png';
import Header from '../header';
import ItemList from '../itemList';
import GotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';


function App() {
    const gotService = new GotService();


    
    return (
        <Router>
            <AppBlock className='app'>
                <Container>
                    <Header/>
                    <Route path='/characters/' render={() => <ItemList getData={gotService.getAllCharacters} />}/>
                    <Route path='/location/' render={() => <ItemList getData={gotService.getAllLocations} />}/>
                    <Route path='/episode/' render={() => <ItemList getData={gotService.getAllEpisodes} />}/>
                </Container>
            </AppBlock>
        </Router>
    )
}

const AppBlock = styled.div`
    width: 100%;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    min-height: 800px;
`
const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
`

export default App;