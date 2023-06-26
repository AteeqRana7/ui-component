import React from 'react';
import './badges.scss';

const UpGrowthBadge = ({ growth }) => {
  return <div className='badge badge-up'>{growth ? <p className='badge-text'> &#8599; {growth}x</p> : <p className='badge-text'> &#8599;</p>}</div>;
};

export default UpGrowthBadge;
