import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { useStateValue } from '../components/StateProvider';

import './Artist.css';

const Artist = () => {
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [{ spotify }, dispatch] = useStateValue();

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      spotify.getArtistAlbums(id).then((resp) => {
        console.log('resp', resp);
        // dispatch({
        //   type: 'SET_SELECTED_ALBUM',
        //   album: resp,
        // });
        setIsLoading(false);
      });
    }
  }, [spotify, id, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return <div className="artist">under construction</div>;
};

export default Artist;
