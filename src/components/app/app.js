import React from 'react';
import Header from '../header';
import ItemList from '../itemList';
import GotService from '../../services/gotService';
import { AppBlock, Container as AppContainer } from './appElements';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { GlobalStyle } from '../../globalStyle';


const App = () => {
    const gotService = new GotService();
    return (
        <Router>
            <GlobalStyle/>
            <AppBlock>
                <AppContainer>
                    <Header/>
                        <Route path='/characters/' render={() => <ItemList getData={gotService.getAllCharacters} />}/>
                        <Route path='/location/' render={() => <ItemList getData={gotService.getAllLocations} />}/>
                        <Route path='/episode/' render={() => <ItemList getData={gotService.getAllEpisodes} />}/>
                </AppContainer>
            </AppBlock>
        </Router>
    )
}

export default App;