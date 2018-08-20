import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

export default class App extends Component {
  state = {
    persons: [
      {id:'adkdfj', name: 'Max', age: 30 },
      {id:'jkljsd', name: 'Parvez', age: 35 },
      {id:'lalkdj', name: 'Nawaz', age: 39 }
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 301 },
  //       { name: 'Parvez1', age: 351 },
  //       { name: 'Nawaz1', age: 319 }
  //     ]
  //   });
  // }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person=>person.id===id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons === true) {
      persons = (<div>
        {
          this.state.persons.map((person,index) => {
            return (
              <Person 
              key={person.id}
              name={person.name} 
              age={person.age} 
              click={this.deletePersonHandler.bind(this,index)}
              changed={(event)=>this.nameChangedHandler(event, person.id)}/>
            )    
          })
        }   
      </div>);
      style.backgroundColor ='red';
    }

    return (
      <div className="App">
        <h1>Hi I am react app</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle</button>
        {persons}
      </div>
    );
  }
}


