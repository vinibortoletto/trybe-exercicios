import React, { Component } from 'react';
import About from './About';

class App extends Component {
  render() {
    const createTask = (taskName) => {
      return <li>{taskName}</li>;
    };

    const tasks = ['Study React', 'Gym', 'Meditate'];

    return (
      <div className="App">
        <About />
        <ul>{tasks.map((task) => createTask(task))}</ul>
      </div>
    );
  }
}

export default App;
