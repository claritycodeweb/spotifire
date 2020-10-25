import React from 'react';
import './SidebarOption.css';
import { Link } from 'react-router-dom';

const SidebarOption = ({ title, Icon, to }) => {
  return (
    <Link to={to}>
      <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" fontSize="large" />}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      </div>
    </Link>
  );
};

export default SidebarOption;
