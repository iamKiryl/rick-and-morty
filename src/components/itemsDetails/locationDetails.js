import React, {useState, useEffect} from 'react';
import { DetailsDiv } from './itemDetailsElements';
import Spinner from '../spinner';

const LocationDetails = ({getData}) => {

    const href = `${window.location.href}`;
    const hrefArr = href.split('/');
    const l = hrefArr.length;
    const id = hrefArr[l-1];


    const [location, setLocation] = useState('');
    const [loading, setLoadind] = useState(true);

    useEffect(() => {
        (async () => {
            getData(id).then(item => {
                setLocation(item)
                setLoadind(false);
            })
        })()   
    }, [getData, id])

    const {dimension, name, created} = location;
            
    return (
        loading ? <Spinner/> : 
        (
            <DetailsDiv>
                <div>Title: {name}</div>
                <div>Dimension: {dimension}</div>
                <div>Created: {created}</div>
            </DetailsDiv>
        )
    )
}

export default LocationDetails
