import React, { useCallback, useEffect, useRef, useState } from 'react';

import './Album.css';
import Header from '../components/Header';
// import { useStateValue } from './StateProvider';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavouriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from '../components/SongRow';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useStateValue } from '../components/StateProvider';
import useEventListener from '../utils/useEventListener';

const Album = () => {
  const ref = useRef(null);
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [{ selectedAlbum, spotify }, dispatch] = useStateValue();

  const [color, setColor] = useState('light');

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      spotify.getAlbum(id).then((resp) => {
        dispatch({
          type: 'SET_SELECTED_ALBUM',
          album: resp,
        });
        setIsLoading(false);
      });
    }
  }, [spotify, id, dispatch]);

  const handleScroll = useCallback(() => {
    if (ref.current.scrollTop > 30 && color === 'light') {
      setColor('dark');
    } else if (ref.current.scrollTop <= 30 && color === 'dark') {
      setColor('light');
    }
  }, [setColor, color, ref]);

  useEventListener('scroll', handleScroll);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="playlist" ref={ref}>
      <div className={`album__header album__header--${color}`}>
        <Header spotify={spotify} />
      </div>

      <div className="playlist__info">
        <img src={selectedAlbum?.images[0].url} alt="" />
        <div className="playlist__infoText">
          <strong>Album</strong>
          <h2>{selectedAlbum?.name}</h2>
          <p>{selectedAlbum?.label}</p>
        </div>
      </div>
      <div className="playlist__songs">
        <div className="playlist__icons">
          <PlayCircleFilledIcon className="playlist__shuffle" />
          <FavouriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {selectedAlbum?.tracks.items.map((item) => (
          <SongRow track={item} album={selectedAlbum} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Album;
