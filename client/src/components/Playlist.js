import React, { useEffect } from 'react';

import './Playlist.css';
import Header from './Header';
import { useStateValue } from './StateProvider';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavouriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import { useParams } from 'react-router-dom';

const Playlist = () => {
  let { id } = useParams();
  const [{ discoverWeekly, spotify }] = useStateValue();

  useEffect(() => {
    if (id) {
      spotify.getAlbum(id).then((a) => {
        console.log('a,', a);
      });
    }
  }, [id]);

  return (
    <div className="playlist">
      <Header spotify={spotify} />

      <div className="playlist__info">
        <img src={discoverWeekly?.images[0].url} alt="" />
        <div className="playlist__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="playlist__songs">
        <div className="playlist__icons">
          <PlayCircleFilledIcon className="playlist__shuffle" />
          <FavouriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discoverWeekly?.tracks.items.map((item) => (
          <SongRow track={item.track} key={item.track.id} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
