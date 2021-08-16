import React, {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { DetailsDiv, ArrowLink, Arrow } from './itemDetailsElements';
import Spinner from '../spinner';


const LocationDetails = ({getData}) => {

    const href = `${window.location.href}`;
    const hrefArr = href.split('/');
    const l = hrefArr.length;
    const id = hrefArr[l-1];
    const history = useHistory();


    const [location, setLocation] = useState('');
    const [loading, setLoadind] = useState(true);
    const [locationLink, setLocationLink] = useState('sdsd');

    const his = (history) => setLocationLink(`${history.goBack()}`); 

    useEffect(() => {
        (async () => {
            getData(id).then(item => {
                setLocation(item)
                setLoadind(false);
            })
        })()   
    }, [getData, id, history])

    const {dimension, name, created} = location;
            
    return (
        loading ? <Spinner/> : 
        (
            <DetailsDiv>
                <ArrowLink onClick={() => his(history)} to={`/rick-and-morty/${locationLink}`} >
                     <Arrow/>
            </ArrowLink>
                <div>Title: {name}</div>
                <div>Dimension: {dimension}</div>
                <div>Created: {created}</div>
            </DetailsDiv>
        )
    )
}

export default LocationDetails
