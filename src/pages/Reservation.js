import React, { Component } from 'react';
import Table from '../Table';
import Form from '../Form';
import "../styles/Reservation.css";
import "../styles/Menu.css";

class Reservation extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <div className="menu">
                <h1 className="menuTitle">Table Reservation</h1>
                
                <p>Add your data to the table.</p>
                </div>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Reserve</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default Reservation;