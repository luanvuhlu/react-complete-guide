import './Person.css';


const Person = (props) => {
    const style = {
        color: 'red',
    }
    return (
        <div className="person"
            style={style}>
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" value={props.name} onChange={props.changed} />
            <input type="button" onClick={props.click} value="Delete" />
        </div>
    )
};

export default Person;