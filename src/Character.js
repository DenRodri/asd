import React, { useEffect, useState } from 'react';
import "./character.css";

export default function Character({ Link }) {
  const [character, setCharacter] = useState({});
  const [episode, setEpisode] = useState({});

  

  useEffect(() => {
    const getApi = async () => {
      console.log(Link);
      
      try {
        const res = await fetch(Link);
        const data = await res.json();
  
        setCharacter(data);
  
        if (data.episode && data.episode.length > 0) {
          const res2 = await fetch(data.episode[0]);
          const data2 = await res2.json();
          setEpisode(data2);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, [Link]);


  return (
    <div>
      <article>
        <div className="imgW"><img src={character?.image} alt="CharImage" /></div>
        <div className="Card">
          <div className="section">
            <a href={Link}><h2>{character?.name}</h2></a>
            <span className="status"><span style={{background: character?.status === `Alive` ? `rgb(85, 204, 68)`: character?.status === `Dead` ? `rgb(214, 61, 46)`: `rgb(158, 158, 158)`}}className="status__icon"></span>{character?.status} - {character?.species}</span>
          </div>
          <div className="section">
            <span className="text-gray">Last known location:</span>
            <a href={character?.location?.url}>{character?.location?.name}</a>
          </div>
          <div className="section">
            <span className="text-gray">First seen in:</span>
            <a href={episode?.url}>{episode?.name}</a>
          </div>
        </div>
      </article>
    </div>
  );
}