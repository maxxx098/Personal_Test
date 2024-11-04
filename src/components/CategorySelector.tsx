import React from 'react';

interface CategorySelectorProps {
    categories: string[];
    selectedCategory: string;
    onSelect: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
    categories,
    selectedCategory,
    onSelect,
}) => {
    return (
        <div style={styles.container}>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    style={{
                        ...styles.button,
                        backgroundColor: selectedCategory === category ? 'lightblue' : 'white',
                    }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0',
    },
    button: {
        margin: '0 5px',
        padding: '10px',
        cursor: 'pointer',
    },
};

export default CategorySelector;
