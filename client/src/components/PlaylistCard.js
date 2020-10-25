import React from 'react';
import './PlaylistCard.css';

const PlaylistCard = ({ data }) => {
  return (
    <div key={data.id} className="playlistCard">
      <img
        src={data.imageUrl}
        alt={data.name}
        className="playlistCard__image"
      />
      <p className="playlistCard__title">{data.name}</p>
      <p className="playlistCard__madeBy">{data.madeBy}</p>
    </div>
  );
};

export default PlaylistCard;
