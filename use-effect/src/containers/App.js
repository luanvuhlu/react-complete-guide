import React from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Persons from '../components/persons/persons';
import Cockpit from '../components/Cockpit/cockpit';


class App extends React.Component {

  state = {
    persons: [
      { name: "Luan", age: 30, id: 1 },
      { name: "Thu", age: 40, id: 2 },
      { name: "Hang", age: 20, id: 3 }
    ],
    showPersons: true,
  }

  togglePersonsHandler = () => {
    const { showPersons } = this.state;
    this.setState({
      showPersons: !showPersons,
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    if (nextProps.persons !== nextState.persons) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <Persons
            togglePersonsHandler={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
            persons={this.state.persons} />
        </header>
      </div>
    );
  }
}

export default App;
