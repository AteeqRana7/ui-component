import React from 'react';
import './listItem.scss';
import DownGrowthBadge from '../Badges/DownGrowthBadge';
import UpGrowthBadge from '../Badges/UpGrowthBadge';
import NewBadge from '../Badges/NewBadge';

const ListItem = ({ title, growth, newItem, rate }) => {
  return (
    <li className='list-item'>
      <div className='list-item__body'>
        <p className='list-item__title'>{title}</p>
        {newItem ? '' : <span className='list-item__growth'>{rate}x</span>}

        {growth > 1 ? (
          <span className='list-item__badge'>
            <UpGrowthBadge growth={growth} />
          </span>
        ) : newItem ? (
          <span className='list-item__badge'>
            <NewBadge />
          </span>
        ) : (
          <span className='list-item__badge'>
            <DownGrowthBadge growth={growth} />
          </span>
        )}
      </div>
    </li>
  );
};

export default ListItem;
