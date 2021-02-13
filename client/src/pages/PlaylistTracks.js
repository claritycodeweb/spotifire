import React, { useEffect, useState } from 'react';

import './Album.css';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useStateValue } from '../components/StateProvider';
import SongsContainer from '../components/SongsContainer';

const PlaylistTracks = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [{ selectedPlaylist, spotify }, dispatch] = useStateValue();

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      spotify.getPlaylist(id).then((resp) => {
        dispatch({
          type: 'SET_SELECTED_PLAYLIST',
          playlist: resp,
        });
        setIsLoading(false);
      });
    }
  }, [spotify, id, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  console.log('selectedPlaylist', selectedPlaylist);

  return (
    <SongsContainer
      album={selectedPlaylist}
      tracks={selectedPlaylist.tracks.items.map((i) => i.track)}
    />
  );
};

export default PlaylistTracks;
