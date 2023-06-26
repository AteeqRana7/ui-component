import React from 'react';
import ListItem from '../ListItem/ListItem';
import './list.scss';
import data from '../../data.json';

const List = () => {
  const items = data;
  console.log(items.highlights);
  return (
    <div className='list'>
      <h2 className='list-title'>Highlights</h2>
      {data.highlights.map((item) => (
        <ListItem title={item.title} growth={item.growth} rate={item.rate} newItem={item.new} />
      ))}
    </div>
  );
};

export default List;
