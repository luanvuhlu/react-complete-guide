import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
            backgroundColor: 'red',
        }
    }
    return (
        <div className="person"
            style={style}>
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default Radium(Person);