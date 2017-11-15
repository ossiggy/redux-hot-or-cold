import React from 'react';
import {makeGuess} from '../actions'
import './guess-form.css';

export default class GuessForm extends React.Component {
    onGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(makeGuess(value));
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

