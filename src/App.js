import React from 'react'
import "./App.css";
import logo from './assets/logo.png';
import background from './assets/Backgr.PNG';
import netlify from './assets/netlify.PNG';
import stellate from './assets/Stellate.PNG';
import X from './assets/X.PNG';
import github from './assets/github.PNG';
import Corazon from './assets/Corazon.PNG';
import Character from './Character.js';
import { CharacterList } from './CharacterList.js'


export default function App() {

  return (
    <div>
      <nav>
        <img className="logo" src={logo} alt="logo"/>
        <div className="list">
        <a href="https://rickandmortyapi.com/documentation">Docs</a>
        <a href="https://rickandmortyapi.com/about">About</a>
        <a href="https://rickandmortyapi.com/support-us"><span>
          SUPPORT US
        </span></a>
        </div>
      </nav>
      <div className="header">
      <h1 className="header-title">
      The Rick and Morty API
      </h1>
      <img className="headerbackgr" src={background} alt="background"/>
      </div>
      <div className="body">
        <div className="showcase">
        {CharacterList?.map((Link) => { 
          return <Character key={Link.CharLink.split("/").pop()} Link={Link.CharLink} />;
          })}
        </div>
      </div>
      <div className="footer">
        <ul>
          <a href="https://rickandmortyapi.com/api/character">Characters: 826</a>
          <a href="https://rickandmortyapi.com/api/location">Locations: 126</a>
          <a href="https://rickandmortyapi.com/api/episode">Episodes: 51</a>
        </ul>
        <a href="https://status.rickandmortyapi.com/" className="server">Server status <span></span></a>
        <div className="ayudas">
          <a href="https://www.netlify.com/"> <img src={netlify}  alt="netlify"/></a>
          <a href="https://stellate.co/?ref=powered-by"><img src={stellate} alt="stellate"/></a>
        </div>
        <ul>
          <a href="https://github.com/afuh/rick-and-morty-api"><img src={github} alt="github"/></a>
          <a href="https://twitter.com/rickandmortyapi"><img src={X} alt="X"/></a>
          <a href="https://rickandmortyapi.com/support-us"><img src={Corazon} alt="Corazon"/></a>
        </ul>
        <div className="Contacto">
        <span>❮❯ by <a href="https://github.com/afuh">Axel Fuhrmann</a> 2023</span>
        </div>
      </div>
    </div>
  )
}
