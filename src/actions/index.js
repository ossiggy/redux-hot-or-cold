export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
  type: NEW_GAME,
});

export const MAKE_GUESS = 'MAKE_GUESS';
export const makeGuess = (guess) => ({
  type: MAKE_GUESS,
  guess
})

export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfo = (showInfoModal) => ({
  type: TOGGLE_INFO,
  showInfoModal
})

