import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarOption from './SidebarOption';

import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

import './Sidebar.css';
import { useStateValue } from './StateProvider';

export const Sidebar = () => {
  const [{ playlists }] = useStateValue();
  return (
    <div className="sidebar">
      <a href="/" className="sidebar__logo">
        <SlowMotionVideoIcon />
        Spotifire
      </a>

      {/* <img
    
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      ></img> */}
      <SidebarOption Icon={HomeIcon} title="Home" to="/" />
      <SidebarOption Icon={SearchIcon} title="Search" to="/search" />
      <SidebarOption
        Icon={LibraryMusicIcon}
        title="Your Library"
        to="/my-library"
      />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          key={playlist.id}
          to={`/playlist/${playlist.id}`}
        />
      ))}
    </div>
  );
};
