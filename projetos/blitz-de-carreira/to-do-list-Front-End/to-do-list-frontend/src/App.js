import React from 'react';
import './App.css';
import NewTask from './componets/newTask';
import TaskList from './componets/todolist';
// import toDoListAPI from './service/toDoListAPI';

class App extends React.Component {
  // constructor() {
  //   super()

  //   this.state = {
  //     task: []
  //   }
  // }

  // componentDidMount = () => {

  // toDoListAPI().then((e) => this.setState({task: e}));
  // }


  render() {
    // const { task } = this.state;

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>    
      <NewTask />
      <TaskList />
    </div>
  );
}
}


export default App;
