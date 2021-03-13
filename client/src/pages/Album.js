import React, { useEffect, useState } from 'react';

import './Album.css';

import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useStateValue } from '../components/StateProvider';
import SongsContainer from '../components/SongsContainer';
import BaseLayout from '../components/Layouts/BaseLayout';

const Album = () => {
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [{ selectedAlbum, spotify }, dispatch] = useStateValue();

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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BaseLayout>
      <SongsContainer
        album={selectedAlbum}
        tracks={selectedAlbum.tracks.items}
      ></SongsContainer>
    </BaseLayout>
  );
};

export default Album;
