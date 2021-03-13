import React from 'react';

import './SongsContainer.css';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavouriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

const SongsContainer = ({ album, tracks }) => {
  // const [{ spotify }] = useStateValue();

  return (
    <div className="playlist">
      <div className="playlist__info">
        <img src={album?.images[0].url} alt="" />
        <div className="playlist__infoText">
          <strong>Album</strong>
          <h2>{album?.name}</h2>
          <p>{album?.label}</p>
        </div>
      </div>
      <div className="playlist__songs">
        <div className="playlist__icons">
          <PlayCircleFilledIcon className="playlist__shuffle" />
          <FavouriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {tracks.map((item) => (
          <SongRow track={item} album={album} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SongsContainer;
