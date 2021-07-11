import React from 'react';
import { useState } from 'react';
import { Head, Ul, IconDiv, IconPuzzle, LogoHead, Logo, HeaderLink } from './headerElements';

const Header = () => {

    const [ navList, setNavList ] = useState(false);

    const toggleNavList = () => {
        setNavList(!navList);
    }

    const closeNavList = () => {
        setNavList(false);
    }

    return(
        <Head navlist={navList ? 1 : 0} >
            <LogoHead>
                <Logo onClick={closeNavList} to='/'>Rick and Morty</Logo>
            </LogoHead>
            <Ul navlist={navList ? 1 : 0}>
               <li>
                    <HeaderLink onClick={closeNavList} to='/characters/'>Characters</HeaderLink>   
                </li>
                <li>
                    <HeaderLink onClick={closeNavList} to='/location/'>Locations</HeaderLink>   
                </li> 
                <li>
                    <HeaderLink onClick={closeNavList} to='/episode/'>Episodes</HeaderLink>   
                </li> 
            </Ul>
            <IconDiv>
                <IconPuzzle navlist={navList ? 1 : 0} onClick={toggleNavList} />
            </IconDiv>
        </Head>
    );
}

export default Header;