import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Persons from '../components/persons/persons';


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
    let persons = this.state.showPersons? (<Persons data={this.state.persons} />) : null;
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
