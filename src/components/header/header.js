import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header(){
    return(
        <Head>
            <Link to='/'>
                <h3>Rick and Morty App</h3>
            </Link>
            <Ul>
               <li>
                    <Link to='/characters/'>Characters</Link>   
                </li>
                <li>
                    <Link to='/location/'>Locations</Link>   
                </li> 
                <li>
                    <Link to='/episode/'>Episodes</Link>   
                </li> 
            </Ul>
        </Head>
    );
}

const Head = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.6);
    margin-bottom: 20px;
    padding: 0px 20px;
    border-radius: 0 0 10px 10px;
    font-family: 'Nerko One', cursive;
    li{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    li+li{
        margin-left: 10px;
    }
    a{
        color: darkgreen;
        text-decoration: none;
    }
    h3{
        font-size: 28px;
    }
`
const Ul = styled.ul`
    list-style: none;
    display: flex;
    max-width: 400px;
    width: 100%;
    justify-content: space-between;
    a{
        font-size: 22px;
    }
    
`

export default Header;