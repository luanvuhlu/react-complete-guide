import styled from 'styled-components';


const StyledDiv = styled.div`width: 60%;
    margin: 30px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    padding: 16px;
    cursor: pointer;
    background-color: ${props => props.styleAlt};

    // @media (min-width: 500px) {
    //     width: 450px;
    //     background-color: red;
    // }

    :hover {
        background-color: lightgreen;
        color: black;
    }
`;

const Person = (props) => {
    return (
        <StyledDiv styleAlt={props.styleAlt}>
            <p>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </StyledDiv>
    )
};

export default Person;