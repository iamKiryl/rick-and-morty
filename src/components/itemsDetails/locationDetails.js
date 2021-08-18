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
    
    useEffect(() => {
        (async () => {
            getData(id).then(item => {
                setLocation(item)
                setLoadind(false);
            })
        })()   
    }, [getData, id, history])

    const {dimension, name, created} = location;
    
    const his = (num = -1) => {
        history.go(num);
    }        
    
    return (
        loading ? <Spinner/> : 
        (
            <DetailsDiv>
                <ArrowLink onClick={() => { his(-1); }} to={`/rick-and-morty/`} >
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
