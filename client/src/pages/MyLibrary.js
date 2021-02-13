import React from 'react';
import BaseLayout from '../components/Layouts/BaseLayout';
import { useStateValue } from '../components/StateProvider';

import PlaylistCard from '../components/PlaylistCard';

import './MyLibrary.css';
import { Link } from 'react-router-dom';

const MyLibrary = () => {
  const [{ playlists }] = useStateValue();

  console.log('playlist', playlists);

  return (
    <BaseLayout>
      <div className="myLibrary">
        <h2 className="myLibrary__title">Your library</h2>
        <div className="myLibrary__list">
          {playlists?.items
            .map((p) => ({
              id: p.id,
              name: p.name,
              imageUrl: p.images[0]?.url,
              madeBy: `By ${p.owner.display_name}`,
            }))
            .map((p) => (
              <Link to={`/playlist/${p.id}`} key={p.id}>
                <PlaylistCard data={p} />
              </Link>
            ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default MyLibrary;
