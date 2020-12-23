import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useStateValue } from '../components/StateProvider';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import useEventListener from '../utils/useEventListener';

import './Home.css';

const Home = () => {
  const ref = useRef(null);
  const [
    { topTracks, topArtists, recentlyPlayed, spotify },
    dispatch,
  ] = useStateValue();

  const [color, setColor] = useState('light');

  useEffect(() => {
    spotify.getMyTopTracks().then((topTracks) => {
      dispatch({
        type: 'SET_TOPTRACKS',
        topTracks: topTracks.items,
      });
    });

    spotify.getMyRecentlyPlayedTracks().then((response) => {
      dispatch({
        type: 'SET_RECENTLYPLAYED',
        items: response.items,
      });
    });

    // spotify.getRecommendations().then((response) => {
    //   // console.log('response', rsponse);
    //   dispatch({
    //     type: 'SET_RECOMMENDATIONS',
    //     items: response.items,
    //   });
    // });

    return () => {};
  }, [spotify, dispatch]);

  const handleScroll = useCallback(() => {
    if (ref.current.scrollTop > 30 && color === 'light') {
      setColor('dark');
    } else if (ref.current.scrollTop <= 30 && color === 'dark') {
      setColor('light');
    }
  }, [setColor, color, ref]);

  useEventListener('scroll', handleScroll);

  return (
    <div className="home" ref={ref}>
      <div className={`home__header home__header--${color}`}>
        <Header />
      </div>

      <h2 className="home_title">Recentyl played</h2>
      <div className="home__topTracks">
        {recentlyPlayed &&
          recentlyPlayed
            .filter((a) => a.album.images.length > 0)
            .map((track) => (
              <Link to={`/album/${track.album.id}`} key={track.id}>
                <div key={track.id} className="home__topTrack">
                  <img
                    src={track.album.images[1].url}
                    alt={track.name}
                    className="home__topTrackImage"
                  />
                  <p className="home__topTrackTitle">{track.name}</p>
                  <p className="home__topTrackArtist">
                    {track.album.artists[0].name}
                  </p>
                </div>
              </Link>
            ))}
      </div>

      <h2 className="home_title">My top tracks</h2>
      <div className="home__topTracks">
        {topTracks &&
          topTracks
            .filter((a) => a.album.images.length > 0)
            .map((track) => (
              <Link to={`/album/${track.album.id}`} key={track.id}>
                <div key={track.id} className="home__topTrack">
                  <img
                    src={track.album.images[1].url}
                    alt={track.name}
                    className="home__topTrackImage"
                  />
                  <p className="home__topTrackTitle">{track.name}</p>
                  <p className="home__topTrackArtist">
                    {track.album.artists[0].name}
                  </p>
                </div>
              </Link>
            ))}
      </div>

      <h2 className="home_title">Top artists</h2>
      <div className="home__topTracks">
        {topArtists &&
          topArtists
            .filter((a) => a.images.length > 0)
            .map((artist) => (
              <Link to={`/artist/${artist.id}`} key={artist.id}>
                <div key={artist.id} className="home__topTrack">
                  <img
                    src={artist.images[1].url}
                    alt={artist.name}
                    className="home__topTrackImage"
                  />
                  <p className="home__topTrackTitle">{artist.name}</p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Home;
