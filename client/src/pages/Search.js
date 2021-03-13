import React from 'react';
import { useStateValue } from '../components/StateProvider';

import './Search.css';
import BaseLayout from '../components/Layouts/BaseLayout';
import MusicBoxItem from '../components/MusicBoxItem';

const Search = () => {
  const [{ searchData }] = useStateValue();

  if (!searchData) {
    return (
      <BaseLayout displaySearch={true}>
        <div className="search">
          <h2 className="search__title">Search here</h2>
          <div className="search__section">
            <div className="search__empty">
              Search by artist songs or playlists
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout displaySearch={true}>
      <div className="search">
        <h2 className="search__title">Albums</h2>
        <div className="search__section">
          {searchData?.albums &&
            searchData.albums.items
              .filter((a) => a.images.length > 0)
              .map((a) => (
                <MusicBoxItem
                  urlPrefix="album"
                  param={a.id}
                  imageUrl={a.images[1].url}
                  by={a.artists[0].name}
                  {...a}
                  key={`albums${a.id}`}
                />
              ))}
        </div>
        <h2 className="search__title">Tracks</h2>
        <div className="search__section">
          {searchData?.tracks &&
            searchData.tracks.items
              .filter((t) => t.album.images.length > 0)
              .map((t) => (
                <MusicBoxItem
                  urlPrefix="album"
                  param={t.id}
                  imageUrl={t.album.images[1].url}
                  by={t.album.artists[0].name}
                  {...t}
                  key={`tracks${t.id}`}
                />
              ))}
        </div>
        <h2 className="search__title">Playlists</h2>
        <div className="search__section">
          {searchData?.playlists &&
            searchData.playlists.items
              .filter((p) => p.images.length > 0)
              .map((t) => (
                <MusicBoxItem
                  urlPrefix="playlist"
                  param={t.id}
                  imageUrl={t.images[0].url}
                  by={t.owner.display_name}
                  {...t}
                  key={`playlists${t.id}`}
                />
              ))}
        </div>
        <h2 className="search__title">Artists</h2>
        <div className="search__section">
          {searchData?.artists &&
            searchData.artists.items
              .filter((a) => a.images.length > 0)
              .map((a) => (
                <MusicBoxItem
                  urlPrefix="artist"
                  param={a.id}
                  imageUrl={a.images[0].url}
                  by=""
                  {...a}
                  key={`${a.id}`}
                />
              ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Search;
