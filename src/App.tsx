import React from 'react';
import GameList from './pages/GameList';

const App: React.FC = () => {
    return (
        <div>
            <h1>Game Library</h1>
            <GameList />
        </div>
    );
};

export default App;
