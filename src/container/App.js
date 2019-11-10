import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    state = {
        person: [
            {id: 'as', name: 'Max', age: 28},
            {id: 'dsad', name: 'Manu', age: 28},
            {id: 'asd', name: 'Stephanie', age: 28},
        ],
        otherState: 'Some other value',
        showPerson: false
    };

        deletePersonHandler = (personIndex) => {
        const person = [...this.state.person];
        person.splice(personIndex,1  );
        this.setState({person: person});
        }

    nameChangeHandler = (event, id ) => {
        const personIndex = this.state.person.findIndex(p => {
            return p.id === id
        })
        // записываем только его
        const persons = {
            ...this.state.person[personIndex]
            };
        // присваиваем введённое имя
        persons.name = event.target.value;

        //записываем всех
        const person = [...this.state.person];
        person[personIndex] = persons;

            this.setState({person: person})
    }

        togglePersonHandler = () => {
            const doesShow = this.state.showPerson;
            this.setState({showPerson: !doesShow});
        }

    render() {


        let person = null;
        if(this.state.showPerson){
            person =    <Persons
                        persons={this.state.person}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler}/>
        }




        return (
            <div className={classes.App}>
                <Cockpit showPerson={this.state.showPerson}
                         persons={this.state.person}
                         clicked={this.togglePersonHandler}/>
                {person}
            </div>
        );
    }
}

    export default App;



