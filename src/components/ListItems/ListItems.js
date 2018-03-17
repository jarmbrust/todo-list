import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListItems.css';

const listItems = (props) => (
    <ul className="ListItems">
        {
            Object.keys(props.listItems).map((item, index) => {
                return <ListItem 
                    listItem={item}
                    completed={props.listItems[item].completed}
                    changed={() => { return props.checkboxChecked(item) }}
                    key={index}
                />

            })
    }
    </ul>
);

export default listItems;