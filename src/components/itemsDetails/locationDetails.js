import React, {useState, useEffect} from 'react';

const LocationDetails = ({getData}) => {

    const href = `${window.location.href}`;
    const hrefArr = href.split('/');
    const l = hrefArr.length;
    const id = hrefArr[l-1];


    const [location, setLocation] = useState('');

    useEffect(() => {
        (async () => {
            getData(id).then(item => setLocation(item))
        })()   
    }, [getData, id])

    const {dimension, name, created} = location;
            
    return (
        <div>
            <div>{name}</div>
            <div>{dimension}</div>
            <div>{created}</div>
        </div>
    )
}

export default LocationDetails
