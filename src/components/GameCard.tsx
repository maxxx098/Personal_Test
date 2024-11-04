import React from 'react';
import { Game } from '../types/Game';

interface GameCardProps {
    game: Game;
    onToggleFavorite: (id: number) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onToggleFavorite }) => {
    return (
        <div style={styles.card}>
            <img src={game.img} alt={game.name} style={styles.image} />
            <div style={styles.info}>
                <h3 style={styles.title}>{game.name}</h3>
                <p style={styles.category}>{game.category}</p>
                <button 
                    onClick={() => onToggleFavorite(game.id)} 
                    style={{
                        ...styles.favoriteButton,
                        backgroundColor: game.isFavorite ? 'gold' : 'lightgray'
                    }}
                >
                    {game.isFavorite ? '★' : '☆'}
                </button>
            </div>
        </div>
    );
};

const styles = {
    card: {
        width: '100%',
        maxWidth: '250px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'cover' as 'cover',
    },
    info: {
        padding: '10px',
        textAlign: 'center' as 'center',
    },
    title: {
        fontSize: '16px',
        fontWeight: 'bold' as 'bold',
        margin: '8px 0',
    },
    category: {
        fontSize: '14px',
        color: '#888',
        margin: '4px 0',
    },
    favoriteButton: {
        border: 'none',
        fontSize: '20px',
        padding: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    }
};

export default GameCard;