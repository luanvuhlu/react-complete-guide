import { Component } from 'react';
import Person from './person/Person';
import Cockpit from '../Cockpit/cockpit';

class Persons extends Component {

    render() {
        const personStyle = {
            backgroundColor: 'purple',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            cursor: 'pointer',
        }
        return <div style={personStyle}>
            <Cockpit
                onClick={this.props.togglePersonsHandler}
                // showPersons={this.props.showPersons} 
                />
            {
                this.props.showPersons ?
                    this.props.persons.map(person =>
                    (<Person
                        key={person.id}
                        name={person.name}
                        age={person.age} />
                    )
                    )
                    : null
            }
        </div>
    }

    componentWillUnmount() {
        console.log("[persons.js] componentWillUnmount");
    }

    componentDidMount() {
        console.log("[persons.js] componentDidMount");
    }

    componentDidUpdate() {
        console.log("[persons.js] componentDidUpdate");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[persons.js] getSnapshotBeforeUpdate");
        return { message: 'Snapshot' }
    }

}

export default Persons;