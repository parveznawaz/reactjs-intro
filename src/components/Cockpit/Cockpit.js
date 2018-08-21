import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
    let btnClass = '';
    let assignedClasses = [];

    if(props.showPersons){
        btnClass=classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    
    return (
        <div>
            <h1>GS1 Service Request app</h1>
            <p className={assignedClasses.join(' ')}>This is working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle</button>
        </div>);
};

export default cockpit;