import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({ onCharacterClick }) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const publicKey = '1696a8618d854e1bf4293311c9afd5f7';
        const hash = 'a0a8675b9fb284af5358ab2c89d1a7ac';
        axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`)
            .then(response => {
                setCharacters(response.data.data.results);
            })
    }, []);

    return (
        <div className='character-list'>
            <h2>Marvel Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id} onClick={() => onCharacterClick(character.id)}>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                        <span>{character.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterList;

