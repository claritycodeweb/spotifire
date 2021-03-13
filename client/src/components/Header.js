import React, { useCallback, useEffect } from 'react';
import './Header.css';

import ArrowRight from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowLeft from '@material-ui/icons/ArrowBackIosRounded';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';
import { Avatar, debounce, makeStyles } from '@material-ui/core';
import { useForm } from '../utils/useForm';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  small: {
    width: '30px',
    height: '30px',
  },
}));

const Header = (props) => {
  const [values, handleChange] = useForm({ query: '' });
  const [{ user, spotify }, dispatch] = useStateValue();
  const classes = useStyles();
  const history = useHistory();

  const search = useCallback(
    debounce((newSearch) => {
      spotify
        .search(newSearch, ['artist', 'album', 'track', 'playlist'])
        .then((resp) => {
          console.log('resp', resp);
          dispatch({
            type: 'SET_SEARCH_DATA',
            search: resp,
          });
        });
    }, 400),
    []
  );

  useEffect(() => {
    if (values.query) {
      search(values.query);
    }
  }, [values.query, search]);

  return (
    <div className="header">
      <div className="header__history">
        <button
          onClick={() => {
            history.goBack();
          }}
          className="header__historyButton"
        >
          <ArrowLeft fontSize="small" />
        </button>
        <button
          onClick={() => {
            history.goForward();
          }}
          className="header__historyButton"
        >
          <ArrowRight fontSize="small" />
        </button>
      </div>
      {props.displaySearch && (
        <div className="header__left">
          <SearchIcon />
          <input
            placeholder="Search for Artists, Songs, or Podcasts "
            type="text"
            name="query"
            value={values.query}
            onChange={handleChange}
          />
        </div>
      )}

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="RQ" className={classes.small} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
