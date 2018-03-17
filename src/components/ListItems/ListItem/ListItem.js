import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    return (
        <li className="ListItem">
            {props.listItem}
            <input 
                type="checkbox" 
                defaultChecked={props.completed} 
                onChange={props.changed}
            />
        </li>
    )
}

ListItem.defaultChecked = {
    checked: false
};

export default ListItem;