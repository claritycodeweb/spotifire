import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import Player from './components/Player';
import { useStateValue } from './components/StateProvider';

const spotify = new SpotifyWebApi();

const keyToken = 'spotifire.id_token';
const keyExpires = 'spotifire.expires_in';

const getJwtToken = () => localStorage.getItem(keyToken);

const setJwtToken = (token) => {
  localStorage.setItem(keyToken, token);
};

const getExpiration = () => localStorage.getItem(keyExpires);

const setExpiration = (time) => localStorage.setItem(keyExpires, time);

const getToken = () => {
  const hash = getTokenFromUrl();

  const _newToken = hash.access_token;
  const _newExpiresIn = hash.expires_in;

  if (_newToken && _newExpiresIn) {
    const _newExpiresInCalc = Math.floor(
      new Date().getTime() / 1000 + parseInt(_newExpiresIn, 10)
    );
    setJwtToken(_newToken);
    setExpiration(_newExpiresInCalc);
    return _newToken;
  } else {
    const _oldToken = getJwtToken();
    const _oldExpresIn = getExpiration();

    if (_oldExpresIn < Math.floor(new Date().getTime() / 1000)) {
      localStorage.removeItem(keyExpires);
      localStorage.removeItem(keyToken);
      return null;
    }

    return _oldToken;
  }
};

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const _token = getToken();

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });

      spotify.getPlaylist('6v3rMJeprV1kQuCcOLZIyM').then((response) => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discoverWeekly: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: response.items,
        })
      );

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      });
    }

    window.location.hash = '';

    return () => {};
  }, [token, dispatch]);

  return (
    <div className="app">
      <Router>{token ? <Player spotify={spotify} /> : <Login />}</Router>
    </div>
  );
}

export default App;
