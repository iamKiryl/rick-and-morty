import React, {useState, useEffect} from 'react'
import Spinner from '../spinner';

const EpisodeDetails = ({getData}) => {

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
              setLoadind(false);
            })
        })()   
    }, [getData, id])


    const {name, episode, created} = character;

  return (
    loading ? <Spinner/> : 
    (
      <div>
          <div>{episode}</div>
          <div>{name}</div>
          <div>{created}</div>
      </div>
    )
  )
}

export default EpisodeDetails
