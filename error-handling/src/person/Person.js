import './Person.css';

const Person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error("Something went wrong!");
    }
    return (
        <div className="person">
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};

export default Person;