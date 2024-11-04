// src/data/mockGames.ts
import { Game } from '../types/Game';

export const games: Game[] = [
    {
        id: 1,
        name: 'Bad Wolf',
        category: 'Slots',
        provider: 'Provider A',
        img: '/images/assets/EM.webp', // Make sure the image exists in public/images
        isFavorite: false,
    },
    {
        id: 2,
        name: 'Lucky Seven',
        category: 'New',
        provider: 'Provider B',
        img: '/images/lucky-seven.webp',
        isFavorite: false,
    },
    {
        id: 3,
        name: 'Golden Treasure',
        category: 'Start',
        provider: 'Provider C',
        img: '/images/golden-treasure.webp',
        isFavorite: false,
    },
    // Add more games as needed
];
