import React from 'react';
import UpGrowthBadge from '../Badges/UpGrowthBadge';
import './cardHeader.scss';
import data from '../../data.json';

const CardHeader = () => {
  return (
    <div className='card-header'>
      <div className='card-header__main'>
        <div className='card-header__main-title'>
          <UpGrowthBadge rate={false} />
          <p>{data.title}</p>
        </div>
        <p className='card-header__main-quarters'>Q3 &#8594; Q4 2019</p>
      </div>
      <div className='card-header__stats'>
        <div className='card-header__stats-title'>
          <p>2x &#8594; 5.3x</p>
        </div>
        <p className='card-header__stats-quarters'>$712,205.08</p>
      </div>
      <div className='card-header__highlights'>
        <p>2 mark changes</p>
        <p>10 new investments</p>
      </div>
    </div>
  );
};

export default CardHeader;
