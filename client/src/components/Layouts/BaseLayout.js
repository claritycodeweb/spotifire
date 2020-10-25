import React from 'react';

import './BaseLayout.css';
import Header from '../Header';

const BaseLayout = ({ children }) => {
  return (
    <div className="baseLayout">
      <div className="baseLayout__header">
        <Header />
      </div>
      {children}
    </div>
  );
};

export default BaseLayout;
