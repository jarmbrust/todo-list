import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    console.log('props =>', props);
    return (
        <li className="ListItem">
            {props.listItem}
            <input type="checkbox" defaultChecked={props.completed} changed={(!props.completed).toString()}/>
        </li>
    )
}

ListItem.defaultChecked = {
    checked: false
};

export default ListItem;