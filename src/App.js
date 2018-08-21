import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    let btnClass = '';
    let persons = null;
    if (this.state.showPersons === true) {
      persons = (<div>
        {
          this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })
        }
      </div>);  
      btnClass = classes.Red;    
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>GS1 Service Request app</h1>
          <p className={assignedClasses.join(' ')}>This is working</p>
          <button className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle</button>
          {persons}
        </div>
    );
  }
}


export default App;