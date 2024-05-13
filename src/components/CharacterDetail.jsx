import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const publicKey = '1696a8618d854e1bf4293311c9afd5f7';
        const hash = 'a0a8675b9fb284af5358ab2c89d1a7ac';

        axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${hash}`)
            .then(response => {
                setCharacter(response.data.data.results[0]);
            })
    }, [characterId]);

    if (!character) {
        return <div>Loading...</div>;
    }

    return (
        <div className='character-detail'>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.map(comic => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;

