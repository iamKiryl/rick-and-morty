import React, {useState, useEffect} from 'react'

const EpisodeDetails = ({getData}) => {

    const href = `${window.location.href}`;
    const hrefArr = href.split('/');
    const l = hrefArr.length;
    const id = hrefArr[l-1];

    const [character, setCharacter] = useState('');

    useEffect(() => {
        (async () => {
            getData(id).then(item => setCharacter(item))
        })()   
    }, [getData, id])


    const {name, episode, created} = character;

  return (
    <div>
        <div>{episode}</div>
        <div>{name}</div>
        <div>{created}</div>
    </div>
  )
}

export default EpisodeDetails
