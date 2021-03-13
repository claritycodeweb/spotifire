import React, { useCallback, useRef, useState } from 'react';

import './BaseLayout.css';
import Header from '../Header';
import useEventListener from '../../utils/useEventListener';
import TopBg from '../TopBg';

const BaseLayout = ({ children, bg, displaySearch = false }) => {
  const ref = useRef(null);

  const [color, setColor] = useState('light');

  const handleScroll = useCallback(() => {
    if (ref.current.scrollTop > 20 && color === 'light') {
      setColor('dark');
    } else if (ref.current.scrollTop <= 20 && color === 'dark') {
      setColor('light');
    }
  }, [setColor, color, ref]);

  useEventListener('scroll', handleScroll);

  return (
    <div className={`baseLayout baseLayout--${bg}`} ref={ref}>
      <div className={`baseLayout__header baseLayout__header--${color}`}>
        <Header displaySearch={displaySearch} />
      </div>
      <TopBg />
      {children}
    </div>
  );
};

export default BaseLayout;
