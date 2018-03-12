import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListItems.css';

const listItems = (props) => (
    <ul className="ListItems">
        {props.listItems.map((item, index) => {
            console.log(item, index);
            return <ListItem listItem={item.label} completed={item.completed} onChange={item.changed} key={index} />;
        })}
    </ul>
);

export default listItems;