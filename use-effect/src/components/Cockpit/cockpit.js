import React, { useEffect } from "react"
import './Cockpit.css';


const Cockpit = props => {
    useEffect(() => {
        console.log("[Cockpit] useEffect");
        return () => {
            console.log("[Cockpit] cleanup work in useEffect");
        }
    }, [props.showPersons])

    const className = props.showPersons ? "cockpit off" : "cockpit on";
    return <button  
            onClick={props.onClick}
            className={className}>Toggle persons
        </button>
}

export default React.memo(Cockpit);