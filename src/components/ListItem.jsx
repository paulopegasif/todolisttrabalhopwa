import React from 'react';
import '../styles/listItem.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const ListItem = (props) => {
  return (
    <div className="container-lista">
      <ul className="list-group">
        <li className="list-group-item">
          <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
            <label className="form-check-label" for="firstCheckbox">{props.todo.titulo}</label>
            <div className="list-group-item-tagdelete">
              <span className="badge bg-primary rounded-pill">Tag</span>
              <a href="#!" data-mdb-toggle="tooltip" title="Remover item">
                <FontAwesomeIcon icon={faTrash} style={{color:'red'}} />
              </a>
            </div>
        </li>
      </ul>
    </div>
  )
}

export default ListItem;