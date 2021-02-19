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
    ],
    showPersons: false,
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div style={{
        width: "100%",
      }}>
        {
          this.state.persons.map(person =>
          (<Person
            key={person.name}
            name={person.name}
            age={person.age}
            click={this.switchNameHandler.bind(this, "Juliet")}
            changed={this.nameChangeHandler} />
          )
          )
        }
      </div>)
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <button onDoubleClick={this.togglePersonHandler}>Double click to show persons</button>
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
