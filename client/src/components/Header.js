import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  small: {
    width: '30px',
    height: '30px',
  },
}));

const Header = () => {
  const [{ user }] = useStateValue();
  const classes = useStyles();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="RQ" className={classes.small} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
