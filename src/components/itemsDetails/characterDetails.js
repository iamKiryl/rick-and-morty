import React, {useState, useEffect} from 'react';
import Spinner from '../spinner';
import { DetailsDiv, CharInfo, CharImageContainer, CharImage, ArrowLink, Arrow } from './itemDetailsElements';

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
    const back = () => window.history.back();
    return (

        loading ? <Spinner/> : 
        (
            <DetailsDiv>
                <ArrowLink to='/' onClick={back}>
                     <Arrow/>
                </ArrowLink>
                <CharImageContainer>
                    <CharImage src={img} />
                </CharImageContainer>
                <CharInfo>
                    <div>Name: {name}</div>
                    <div>Gender: {gender}</div>
                    <div>Origin: {origin}</div>
                    <div>Status: {status}</div>
                </CharInfo>
            </DetailsDiv>
        )
    
    )

}

export default CharacterDetails
