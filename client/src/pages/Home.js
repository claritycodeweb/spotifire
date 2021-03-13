import React, { useEffect } from 'react';
import { useStateValue } from '../components/StateProvider';

import './Home.css';
import BaseLayout from '../components/Layouts/BaseLayout';
import MusicBoxItem from '../components/MusicBoxItem';

const Home = () => {
  const [
    { topTracks, topArtists, recentlyPlayed, spotify },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    spotify.getMyTopTracks().then((topTracks) => {
      dispatch({
        type: 'SET_TOPTRACKS',
        topTracks: topTracks.items,
      });
    });

    spotify.getMyRecentlyPlayedTracks().then((response) => {
      console.log('resp', response);
      dispatch({
        type: 'SET_RECENTLYPLAYED',
        items: response.items,
      });
    });

    spotify.getMyTopArtists().then((response) => {
      dispatch({
        type: 'SET_TOP_ARTISTS',
        top_artists: response.items,
      });
    });

    return () => {};
  }, [spotify, dispatch]);

  return (
    <BaseLayout>
      <div className="home">
        <h2 className="home_title">Recently played</h2>
        <div className="home__section">
          {recentlyPlayed &&
            recentlyPlayed
              .filter((a) => a.album.images.length > 0)
              .map((track) => (
                <MusicBoxItem
                  urlPrefix="album"
                  param={track.album.id}
                  imageUrl={track.album.images[1].url}
                  by={track.album.artists[0].name}
                  {...track}
                  key={`recently${track.id}`}
                />
              ))}
        </div>

        <h2 className="home_title">My top tracks</h2>
        <div className="home__section">
          {topTracks &&
            topTracks
              .filter((a) => a.album.images.length > 0)
              .map((track) => (
                <MusicBoxItem
                  urlPrefix="album"
                  param={track.album.id}
                  imageUrl={track.album.images[1].url}
                  by={track.album.artists[0].name}
                  {...track}
                  key={`toptrack${track.id}`}
                />
              ))}
        </div>

        <h2 className="home_title">Top artists</h2>
        <div className="home__section">
          {topArtists &&
            topArtists
              .filter((a) => a.images.length > 0)
              .map((artist) => (
                <MusicBoxItem
                  urlPrefix="artist"
                  param={artist.id}
                  imageUrl={artist.images[1].url}
                  by=""
                  {...artist}
                  key={`topartist${artist.id}`}
                />
              ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
