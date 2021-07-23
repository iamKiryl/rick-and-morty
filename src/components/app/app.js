import React, {useState} from 'react';
import Header from '../header';
import ItemList from '../itemList';
import GotService from '../../services/gotService';
import { AppBlock, Container as AppContainer } from './appElements';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { GlobalStyle } from '../../globalStyle';
import Container from '../container';
import ItemDetails from '../itemDetails/itemDetails';


const App = () => {

    const gotService = new GotService();
    const [characterId, setCharacterId] = useState(0);

    return (
        <Router>
            <GlobalStyle/>
            <AppBlock>
                <AppContainer>
                    <Header/>
                        <Route path='/characters/' 
                            render={() => 
                                <Container  itemList={<ItemList setCharacterId={setCharacterId} getPath={'/characters/'} getData={gotService.getAllCharacters} />} 
                                /> }/>
                        <Route exact path='/characters/:id' 
                            render={() => 
                                <Container  itemList={<ItemDetails id={characterId} getData={gotService.getCharacter} />} 
                                /> }/>
                        <Route path='/location/' 
                            render={() => 
                                <Container itemList={<ItemList getData={gotService.getAllLocations} /> } 
                            />}/>
                        <Route path='/episode/' 
                            render={() =>   
                                <Container itemList={<ItemList getData={gotService.getAllEpisodes}/>} />  
                            }/>
                </AppContainer>
            </AppBlock>
        </Router>
    )
}

export default App;