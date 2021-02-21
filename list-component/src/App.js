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

  deleteHandler = (id) => {
    let persons = [...this.state.persons];
    persons = persons.filter(person => person.id !== id);
    this.setState({ persons })
  }

  nameChangeHandler = (event, id) => {
    let persons = [...this.state.persons];
    const index = persons.findIndex(person => person.id === id);
    let person = { ...persons[index] };
    person.name = event.target.value;
    persons[index] = person;
    this.setState({ persons })
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
            key={person.id}
            name={person.name}
            age={person.age}
            click={this.deleteHandler.bind(this, person.id)}
            changed={(e) => this.nameChangeHandler(e, person.id)} />
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
