import React from 'react';
import './badges.scss';
const DownGrowthBadge = ({ growth }) => {
  return (
    <div className='badge badge-down'>
      <p className='badge-text'>&#8600; {growth}x</p>
    </div>
  );
};

export default DownGrowthBadge;
