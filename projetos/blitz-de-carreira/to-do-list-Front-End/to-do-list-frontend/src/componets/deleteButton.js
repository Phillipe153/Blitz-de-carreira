import React from "react";
import { deleteTaskAPI } from "../service/toDoListAPI";
import remove from '../image/remove.svg'

export default class DeleteButton extends React.Component {
    constructor() {
        super()      

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        const {id} = this.props;
        deleteTaskAPI(id);
      }

    render() {
        return(
            <button 
            data-testid = "delete-button"
            onClick={ this.handleChange }>
                <input 
                  type="image"
                  src={remove}
                  alt={remove}
                />
            </button>
        )
    }
}