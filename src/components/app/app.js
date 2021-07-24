import React from 'react';
import Header from '../header';
import ItemList from '../itemList';
import GotService from '../../services/gotService';
import { AppBlock, Container as AppContainer } from './appElements';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { GlobalStyle } from '../../globalStyle';
import Container from '../container';
import {CharacterDetails, LocationDetails, EpisodeDetails} from '../itemsDetails';


const App = () => {

    const gotService = new GotService();

    return (
        <Router>
            <GlobalStyle/>
            <AppBlock>
                <AppContainer>
                    <Header/>
                        <Route exact path='/characters/' 
                            render={() => 
                                <Container itemList={<ItemList getPath={'/characters/'} getData={gotService.getAllCharacters} />} 
                                /> }/>
                        <Route exact path='/characters/:id' 
                            render={() => 
                                <Container itemList={<CharacterDetails getData={gotService.getCharacter} />} 
                                /> }/>
                        <Route exact path='/location/' 
                            render={() => 
                                <Container itemList={<ItemList getPath={'/location/'} getData={gotService.getAllLocations} /> } 
                            />}/>
                        <Route exact path='/location/:id' 
                            render={() => 
                                <Container itemList={<LocationDetails  getData={gotService.getLocation} /> } 
                            />}/>
                        <Route exact path='/episode/' 
                            render={() =>   
                                <Container itemList={<ItemList getPath={'/episode/'} getData={gotService.getAllEpisodes}/>} />  
                            }/>

                        <Route exact path='/episode/:id' 
                            render={() =>   
                                <Container itemList={<EpisodeDetails getData={gotService.getEpisode}/>} />  
                            }/>
                </AppContainer>
            </AppBlock>
        </Router>
    )
}

export default App;