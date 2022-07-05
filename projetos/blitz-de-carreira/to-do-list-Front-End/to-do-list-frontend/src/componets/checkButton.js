import React from "react";
import {  UpdateStatusTaskAPI } from "../service/toDoListAPI";
import done from '../image/done.svg'


export default class CheckButton extends React.Component {
    constructor() {
        super()
        this.state = {
            status: false,
        }     
                               
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        const { status } = this.state;
        const {id} = this.props;

        
      const  newStatus = status ? 'Pendente' : "Pronto";
        console.log( newStatus);
        this.setState({status: !status})
        UpdateStatusTaskAPI({
            "id": id,
            'status': newStatus
        });
      }

    render() {
        return(
            <button 
            data-testid = 'status-button'
              onClick={this.handleChange}>
                 <input 
                  type="image"
                  src={done}
                  alt={done}
                />
              </button>
        )
    }
}