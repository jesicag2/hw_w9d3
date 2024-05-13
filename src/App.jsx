import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetail';

function App() {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const handleCharacterClick = characterId => {
        setSelectedCharacterId(characterId);
    };

    return (
        <div>
            <CharacterList onCharacterClick={handleCharacterClick} />
            {selectedCharacterId && <CharacterDetail characterId={selectedCharacterId} />}
        </div>
    );
}

export default App
