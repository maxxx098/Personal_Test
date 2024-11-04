import React from 'react';

interface SearchBarProps {
    searchTerm: string;
    onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search for a game..."
            style={styles.input}
        />
    );
};

const styles = {
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
};

export default SearchBar;