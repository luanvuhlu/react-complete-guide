import Person from './person/Person';


const Persons = (props) => {
    const personStyle = {
        backgroundColor: 'purple',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        cursor: 'pointer',
    }
    return <div style={personStyle}>
        {
            props.data.map(person =>
            (<Person
                key={person.id}
                name={person.name}
                age={person.age} />
            )
            )
        }
    </div>
}

export default Persons;