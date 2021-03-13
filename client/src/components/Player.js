import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Sidebar } from './Sidebar';
import './Player.css';
import Footer from './Footer';
import Home from '../pages/Home';
import MyLibrary from '../pages/MyLibrary';
import Album from '../pages/Album';
import Artist from '../pages/Artist';
import Search from '../pages/Search';
import PlaylistTracks from '../pages/PlaylistTracks';

const Player = () => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />

        <Switch>
          <Route exact path={['/']}>
            <Home />
          </Route>

          <Route path="/my-library">
            <MyLibrary />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="/playlist/:id">
            <PlaylistTracks />
          </Route>
          <Route path="/album/:id">
            <Album />
          </Route>
          <Route path="/artist/:id">
            <Artist />
          </Route>

          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default Player;
