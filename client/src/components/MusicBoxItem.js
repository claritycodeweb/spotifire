import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MusicBoxItem.css';

const MusicBoxItem = (props) => {
  return (
    <Link to={`/${props.urlPrefix}/${props.param}`}>
      <div className="musicBox">
        <img
          src={props.imageUrl}
          alt={props.name}
          className="musicBox__image"
        />
        <p className="musicBox__name">{props.name}</p>
        <p className="musicBox__by">{props.by}</p>
      </div>
    </Link>
  );
};

MusicBoxItem.propTypes = {
  urlPrefix: PropTypes.string.isRequired,
  param: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MusicBoxItem;
