import React, {useState, useEffect} from 'react';
import Spinner from '../spinner';
import { DetailsDiv, CharInfo, CharImageContainer, CharImage, ArrowLink, Arrow, StatusDiv, Title } from './itemDetailsElements';

const CharacterDetails = ({getData}) => {

    const href = `${window.location.href}`;
    const hrefArr = href.split('/');
    const l = hrefArr.length;
    const id = hrefArr[l-1];

    const [character, setCharacter] = useState('');
    const [loading, setLoadind] = useState(true);

    useEffect(() => {
        (async () => {
            getData(id).then(item => {
                setCharacter(item)
                setLoadind(false)
            })
        })()   
    }, [getData, id])

    const {gender, name, origin, status, img} = character;
    const statusDote = status === 'Alive' ? true : false;
    return (

        loading ? <Spinner/> : 
        (
            <DetailsDiv>
                <ArrowLink to='/rick-and-morty/characters/'>
                     <Arrow/>
                </ArrowLink>
                <CharImageContainer>
                    <CharImage src={img} />
                </CharImageContainer>
                <CharInfo>
                    <Title>{name}</Title>
                    <StatusDiv statusDote={statusDote}>{status} - {gender}</StatusDiv>
                    <div>Origin: {origin}</div>
                </CharInfo>
            </DetailsDiv>
        )
    
    )

}

export default CharacterDetails
