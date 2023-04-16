import React from 'react';

const Images = () => {
  const numImages = 800;
  const linkPattern = 'https://cdn.dreamteambot.com.br/cards3/s2-%num%-1.png';
  const newCards = "https://cdn.dreamteambot.com.br/cards6/s2-%num%-2.png";
  const images = [];
  const newImages = [];

  for (let i = 1; i <= numImages; i++) {
    let num = ('00000' + i).slice(-5);
    let link = linkPattern.replace('%num%', num);
    images.push(link);
  }
  for (let i = 1; i <= numImages; i++) {
    let num = ('00000' + i).slice(-5);
    let link = newCards.replace('%num%', num);
    newImages.push(link);
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
      {newImages.map((image, index) => (
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
