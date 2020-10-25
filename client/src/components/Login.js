import React from 'react';
import './Login.css';
import { accessUrl } from '../spotify';

import SlowMotionVideoIcon from '@material-ui/icons/SlowMotionVideo';

const Login = () => {
  //here
  return (
    <div className="login">
      <div className="login__logo">
        <span>
          <SlowMotionVideoIcon fontSize="inherit" />
          Spotifire
        </span>
      </div>
      <a className="login__button" href={accessUrl}>
        Login with spotify
      </a>
      {/* <a href={accessUrl}>LOGIN TO SPOTIFY</a> */}
    </div>
  );
};

export default Login;
