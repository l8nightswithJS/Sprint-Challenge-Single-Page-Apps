import React, { useEffect, useState } from "react";
import Axios from "axios";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fetch(){
      try{
        const charactersData = await Axios.get('https://rickandmortyapi.com/api/character/')
          console.log(charactersData.data.results);
          setCharacters(charactersData.data.results);
        }
      catch(err){
          console.log(err)
        }
    }
    fetch()
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [characters]);
  console.log(characters)
  
  
    return (
      <section>
        {characters.map((character) => (
          <div className="card">
           <div className="card-body">
              <h1 className="card-title">
              {character.name}</h1>
              <h3 className="character-status">
              {character.status}             
              </h3>
              <h3 className="character-species">{character.species}</h3>

            </div>
          </div>
        ))}
        <h1>name</h1>
  
      </section>
    );
}


