import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    const crossout = props.completed ? 'crossout' : '';
    return (
        <li className="ListItem">
            <div className={crossout}>
            {props.listItem}
            <input 
                type="checkbox" 
                defaultChecked={props.completed} 
                onChange={props.changed}
            />
            </div>
        </li>
    )
}

ListItem.defaultChecked = {
    checked: false
};

export default ListItem;