import React, {useState, useEffect} from 'react';
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
            <div>
                <div>{name}</div>
                <div>{dimension}</div>
                <div>{created}</div>
            </div>
        )
    )
}

export default LocationDetails
