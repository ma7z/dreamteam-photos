import React from 'react';

const Images = () => {
  const numImages = 668;
  const linkPattern = 'https://cdn.dreamteambot.com.br/cards3/s2-%num%-1.png';
  const images = [];

  for (let i = 1; i <= numImages; i++) {
    let num = ('00000' + i).slice(-5);
    let link = linkPattern.replace('%num%', num);
    images.push(link);
  }

  const handleImageError = (event) => {
    event.target.style.display = 'none';
  };

  return (
    <div className="container">
      {images.map((image, index) => (
        <img
          key={index}
          loading="lazy"
          className="imgs"
          src={image}
          onError={handleImageError}
        />
      ))}
    </div>
  );
};

export default Images;
