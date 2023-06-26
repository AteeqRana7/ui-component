import React from 'react';
import CardHeader from '../../components/CardHeader/CardHeader';
import List from '../../components/List/List';
import './card.scss';

const Card = () => {
  return (
    <div className='card'>
      <CardHeader />
      <div className='card-body'>
        <List />
      </div>
    </div>
  );
};

export default Card;
