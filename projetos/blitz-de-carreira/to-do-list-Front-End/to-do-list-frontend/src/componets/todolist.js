import React from 'react';
import {toDoListAPI} from '../service/toDoListAPI';
import CheckButton from './checkButton';
import DeleteButton from './deleteButton';

export default class TaskList extends React.Component {
  constructor() {
    super()

    this.state = {
      task: []
    }


  }
  componentDidMount = () => {

    toDoListAPI().then((e) => this.setState({task: e}));
    }
  
  componentDidUpdate = () => {
    toDoListAPI().then((e) => this.setState({task: e}));

  }

  render() {
    const { task } = this.state;
    
    return(

    <ul>
      
      {
        task.map((e) => {
        return (
          <li data-testid = "listitem">
            <p >{e.task } , { e.status}</p>
            <CheckButton  id={e.id}/>
            <DeleteButton  id={e.id}/>
          </li>)
      })
      } 
      
    </ul>
    )
    }
}