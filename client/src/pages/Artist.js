import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BaseLayout from '../components/Layouts/BaseLayout';
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

  return (
    <BaseLayout>
      <div className="artist">under construction</div>
    </BaseLayout>
  );
};

export default Artist;
