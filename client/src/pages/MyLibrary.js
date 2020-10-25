import React from 'react';
import BaseLayout from '../components/Layouts/BaseLayout';
import { useStateValue } from '../components/StateProvider';

import PlaylistCard from '../components/PlaylistCard';

import './MyLibrary.css';

const MyLibrary = () => {
  const [{ playlists }] = useStateValue();

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
              <PlaylistCard data={p} />
            ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default MyLibrary;
