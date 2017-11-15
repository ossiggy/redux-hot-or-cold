import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  showInfoModal: false
}

export const hotColdReducer = (state, action) => {
  state = state || initialState;
  if(action.type === actions.NEW_GAME){
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1  
    })
  }
  else if(action.type === actions.MAKE_GUESS){
    const guess = parseInt(action.guess, 10);
    if (isNaN(guess)) {
        return Object.assign({}, state, {
          feedback: "Please enter a valid number"
        })
    }

    const difference = Math.abs(guess - state.correctAnswer);

    let feedback;
    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
        feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    }
    else {
        feedback = 'You got it!';
    }
    return Object.assign({}, state, {
      guesses: [...state.guesses, guess],
      feedback: feedback
    })
    return state;
  }
  else if(action.type === actions.TOGGLE_INFO){
    return Object.assign({}, state, {
      showInfoModal: !state.showInfoModal
    })
  }
  return state;
};