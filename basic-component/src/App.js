import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./person/Person";


class App extends React.Component {

  state = {
    persons: [
      { name: "Luan", age: 30 },
      { name: "Thu", age: 40 },
      { name: "Hang", age: 20 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 50 },
        { name: newName, age: 10 },
        { name: newName, age: 99 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 50 },
        { name: event.target.value, age: 10 },
        { name: event.target.value, age: 99 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <button onDoubleClick={() => this.switchNameHandler("Harry")}>Double click to switch name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, "Juliet")}
            changed={this.nameChangeHandler} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Romeo")}
            changed={this.nameChangeHandler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, "John")}
            changed={this.nameChangeHandler} />
        </header>
      </div>
    );
  }
}

export default App;
