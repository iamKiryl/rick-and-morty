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
                        <Route exact path='/rick-and-morty/characters/' 
                            render={() => 
                                <Container >
                                    <ItemList getPath={'/rick-and-morty/characters/'} getData={gotService.getAllCharacters} /> 
                                </Container> }/>
                        <Route exact path='/rick-and-morty/characters/:id' 
                            render={() => 
                                <Container>
                                    <CharacterDetails getData={gotService.getCharacter} />
                                </Container>
                                }/>
                        <Route exact path='/rick-and-morty/location/' 
                            render={() => 
                                <Container>
                                    <ItemList getPath={'/rick-and-morty/location/'} getData={gotService.getAllLocations} />
                                </Container>
                            }/>
                        <Route exact path='/rick-and-morty/location/:id' 
                            render={() => 
                                <Container>
                                    <LocationDetails  getData={gotService.getLocation} />
                                </Container>  
                            }/>
                        <Route exact path='/rick-and-morty/episode/' 
                            render={() =>   
                                <Container>
                                    <ItemList getPath={'/rick-and-morty/episode/'} getData={gotService.getAllEpisodes} />  
                                </Container> 
                            }/>

                        <Route exact path='/rick-and-morty/episode/:id' 
                            render={() =>   
                                <Container>
                                    <EpisodeDetails getData={gotService.getEpisode}/> 
                                </Container> 
                            }/>
                </AppContainer>
            </AppBlock>
        </Router>
    )
}

export default App;