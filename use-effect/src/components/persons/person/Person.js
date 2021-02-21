import './Person.css';

const Person = (props) => {
    return (
        <div className="person">
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default Person;