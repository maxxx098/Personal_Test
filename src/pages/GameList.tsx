import React, { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import { fetchGames } from '../services/gameService';
import { Game } from '../types/Game';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategorySelector';
import BannerCarousel from '../components/BannerCarousel'; // Importing the carousel

const GameList: React.FC = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const [providers, setProviders] = useState<string[]>([]);
    const [selectedProvider, setSelectedProvider] = useState<string>('ALL');

    useEffect(() => {
        const loadGames = async () => {
            const gameData = await fetchGames();
            setGames(gameData);
            const uniqueProviders = Array.from(new Set(gameData.map(game => game.provider)));
            setProviders(uniqueProviders);
            setLoading(false);
        };
        loadGames();
    }, []);

    const toggleFavorite = (id: number) => {
        setGames(prevGames =>
            prevGames.map(game =>
                game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
            )
        );
    };

    const filteredGames = games.filter(game => {
        const matchesCategory = selectedCategory === 'ALL' || game.category === selectedCategory;
        const matchesProvider = selectedProvider === 'ALL' || game.provider === selectedProvider;
        const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesProvider && matchesSearch;
    });

    return (
        <div style={styles.container}>
           
            <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
            <CategorySelector
                categories={['ALL', 'START', 'NEW', 'SLOTS']}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
            />
            <div>
                <h3>Filter by Provider:</h3>
                {providers.map(provider => (
                    <button
                        key={provider}
                        onClick={() => setSelectedProvider(provider)}
                        style={{ margin: '5px', padding: '5px' }}
                    >
                        {provider}
                    </button>
                ))}
            </div>
            {loading ? (
                <p>Loading games...</p>
            ) : (
                filteredGames.map(game => (
                    <GameCard key={game.id} game={game} onToggleFavorite={toggleFavorite} />
                ))
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
    },
};

export default GameList;
