import React, { Component } from 'react';
import classes from './App.css';
//import Person from '../components/Persons/Person/Person';
//import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 'adkdfj', name: 'Max', age: 30 },
      { id: 'jkljsd', name: 'Parvez', age: 35 },
      { id: 'lalkdj', name: 'Nawaz', age: 39 }
    ],
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    
    let persons = null;
    
    if (this.state.showPersons === true) {
      persons = (<div>
                    <Persons persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
                  </div>);
     
    }

    

    return (
      <div className={classes.App}>
        <Cockpit 
        persons={this.state.persons} 
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler}/>
          {persons}        
      </div>
    );
  }
}


export default App;