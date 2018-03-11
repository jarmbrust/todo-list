import React from 'react';
import './ListItem.css';

const ListItem = (props) => (
    <li className="ListItem">
        {props.listItem}
    </li>
)

export default ListItem;