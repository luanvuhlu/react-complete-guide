import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./person/Person";


class App extends React.Component {

  state = {
    persons: [
      { name: "Luan", age: 30, id: 1 },
      { name: "Thu", age: 40, id: 2 },
      { name: "Hang", age: 20, id: 3 }
    ],
    showPersons: true,
  }

  render() {
    const personStyle = {
      backgroundColor: 'purple',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div style={personStyle}>
        {
          this.state.persons.map(person =>
          (<Person
            key={person.id}
            styleAlt={person.name === "Luan" ? "red" : "green"}
            name={person.name}
            age={person.age} />
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
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
