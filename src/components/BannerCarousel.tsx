import React, { useEffect, useState } from 'react';
import Banner from '../assets/webp/EXPANSE.webp'; 

const BannerCarousel: React.FC = () => {
    const images = [Banner, Banner, Banner]; 
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    return (
        <div style={carouselStyles}>
            <img src={images[currentIndex]} alt="Banner" style={imageStyles} />
        </div>
    );
};

const carouselStyles: React.CSSProperties = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: 'black',
};

const imageStyles: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

export default BannerCarousel;

