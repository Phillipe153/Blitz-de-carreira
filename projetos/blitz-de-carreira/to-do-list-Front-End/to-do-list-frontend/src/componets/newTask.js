import React from "react";
import {  PostNewTaskAPI } from "../service/toDoListAPI";

export default class NewTask extends React.Component {
    constructor() {
        super()
        this.state = {
            task: '',
        }     
                               
        this.handleClick = this.handleClick.bind(this);
        this.hendleChange = this.hendleChange.bind(this);

    }

    hendleChange({target}) {
      this.setState({task: target.value})
    }

    handleClick(event) {
      const {task} = this.state;
       PostNewTaskAPI({'task': task})
       this.setState({task: ''})
      }

    render() {
      const {task} = this.state;
      return(
        <div>
          <input
          data-testid="insert-new-task"
            type="text"
            value={task}
            onChange={this.hendleChange}
          />
          <button 
            data-testid='button-to-insert'
            onClick={this.handleClick}>ok</button>
        </div>
      )
    }
}