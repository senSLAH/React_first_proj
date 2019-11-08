import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
            person = (
                <div >
                    {this.state.person.map((person, index) => {
                        return (
                            <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => {this.nameChangeHandler(event, person.id)}} />
                        );
                     })}
                </div>
            );
        }

        let classes = [];
        if(this.state.person.length <= 2){
            classes.push('red');
        }
        if (this.state.person.length <= 1){
            classes.push('bold');
        }


        return (
            <div className="App">
                <h1>Hi i am a react app</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button className="button"  alt={this.state.showPerson} onClick={this.togglePersonHandler}>
                    Toggle Person
                </button>
                {person}
            </div>
        );
    }
}

    export default App;



