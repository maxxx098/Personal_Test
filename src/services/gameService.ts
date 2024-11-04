
import Wolf from '../assets/webp/EM.webp'
import { Game } from '../types/Game';

const games = [
    { id: 1, name: 'Bad Wolf', category: 'START', provider: 'Provider A', img: Wolf, isFavorite: false },
    { id: 2, name: 'Dragon Quest', category: 'NEW', provider: 'Provider B', img: Wolf, isFavorite: false },
    { id: 3, name: 'Slot Machine', category: 'SLOTS', provider: 'Provider A', img: Wolf, isFavorite: false },
    
];

const fetchGames = async (): Promise<Game[]> => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(games);
        }, 3000);
    });
    return games;
};

export { fetchGames };
