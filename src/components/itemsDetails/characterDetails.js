import React, {useState, useEffect} from 'react';
import Spinner from '../spinner';
import { DetailsDiv, CharInfo, CharImageContainer, CharImage, ArrowLink, Arrow, StatusDiv, Title, DetailsLink } from './itemDetailsElements';

const CharacterDetails = ({getData}) => {

    const href = `${window.location.href}`;
    const hrefArr = href.split('/');
    const l = hrefArr.length;
    const id = hrefArr[l-1];

    const [character, setCharacter] = useState('');
    const [loading, setLoadind] = useState(true);
    const [ link, setLink ] = useState('');
    const {gender, name, origin, status, img, originLink} = character;

    const isLink =  link => {
        const arr =  link.split('/');
        const length = arr.length-1;
        const id = arr[length]
        const position =  arr[length-1];
        if (position === undefined) return false
        return `/rick-and-morty/${position}/${id}`
    }

    useEffect(() => {
        (async () => {
            getData(id).then(item => {
                setCharacter(item)
                setLoadind(false)
                if(originLink !== undefined){
                    setLink(isLink(originLink))
                }
            })
        })()   
    }, [getData, id, originLink])

   
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
                    <div>from: <DetailsLink to={link}>{origin}</DetailsLink></div>
                </CharInfo>
            </DetailsDiv>
        )
    
    )

}

export default CharacterDetails
