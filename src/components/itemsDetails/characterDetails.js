import React, {useState, useEffect} from 'react';
import Spinner from '../spinner';
import { DetailsDiv, ArrowLink, Arrow } from './itemDetailsElements';

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

    const {gender, name, origin, status} = character;
    return (

        loading ? <Spinner/> : 
        (
            <DetailsDiv>
                <ArrowLink to='/rick-and-morty/characters/' >
                     <Arrow/>
                </ArrowLink>
                <div>Name: {name}</div>
                <div>Gender: {gender}</div>
                <div>Origin: {origin}</div>
                <div>Status: {status}</div>
            </DetailsDiv>
        )
    
    )

}

export default CharacterDetails
