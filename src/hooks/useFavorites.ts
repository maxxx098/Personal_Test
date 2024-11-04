import { useState } from 'react';
import { Game } from '../types/Game';

const useFavorites = (initialGames: Game[]) => {
    const [favorites, setFavorites] = useState<Game[]>(initialGames.filter(game => game.isFavorite));

    const toggleFavorite = (id: number) => {
        setFavorites(prevFavorites => {
            const isFavorite = prevFavorites.some(game => game.id === id);
            if (isFavorite) {
                return prevFavorites.filter(game => game.id !== id);
            } else {
                const gameToAdd = initialGames.find(game => game.id === id);
                if (gameToAdd) {
                    return [...prevFavorites, { ...gameToAdd, isFavorite: true }];
                }
            }
            return prevFavorites;
        });
    };

    return { favorites, toggleFavorite };
};

export default useFavorites;