import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Sidebar } from './Sidebar';
import './Player.css';
import Playlist from './Playlist';
import Footer from './Footer';
import Home from '../pages/Home';
import MyLibrary from '../pages/MyLibrary';
import Album from '../pages/Album';

const Player = () => {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />

        <Switch>
          <Route path="/my-library">
            <MyLibrary />
          </Route>
          <Route path="/playlist">
            <Playlist />
          </Route>
          <Route path="/album/:id">
            <Album />
          </Route>
          <Route path={['/', '/home']}>
            <Home />
          </Route>
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default Player;
