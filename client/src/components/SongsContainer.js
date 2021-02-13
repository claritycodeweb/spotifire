import React, { useCallback, useRef, useState } from 'react';

import './SongsContainer.css';
import Header from './Header';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavouriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import { useStateValue } from './StateProvider';
import useEventListener from '../utils/useEventListener';

const SongsContainer = ({ album, tracks }) => {
  const ref = useRef(null);
  const [{ spotify }] = useStateValue();

  const [color, setColor] = useState('light');

  const handleScroll = useCallback(() => {
    if (ref.current.scrollTop > 30 && color === 'light') {
      setColor('dark');
    } else if (ref.current.scrollTop <= 30 && color === 'dark') {
      setColor('light');
    }
  }, [setColor, color, ref]);

  useEventListener('scroll', handleScroll);

  return (
    <div className="playlist" ref={ref}>
      <div className={`album__header album__header--${color}`}>
        <Header spotify={spotify} />
      </div>

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
