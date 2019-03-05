import { createAction } from 'redux-actions';

export const NEW_GAME = '[Game] New Game';
export const newGame = createAction(NEW_GAME);

export const CHANGE_BOARD_GAME = '[Game] Change Board Setup';
export const changeBoard = createAction(CHANGE_BOARD_GAME);

export const CHANGE_PLAYER_GAME = '[Game] Change Current Player';
export const changePlayer = createAction(CHANGE_PLAYER_GAME);

export const CHANGE_SCORES_GAME = '[Game] Change Scores';
export const changeScores = createAction(CHANGE_SCORES_GAME);

export const CHANGE_WINNER_GAME = '[Game] Change Winner';
export const changeWinner = createAction(CHANGE_WINNER_GAME);

export const END_GAME = '[Game] Game over';
export const endGame = createAction(END_GAME);

export const CHANGE_PLAYERX = '[Game] Change PlayerX';
export const changePlayerX = createAction(CHANGE_PLAYERX);

export const CHANGE_PLAYERO = '[Game] Change PlayerO';
export const changePlayerO = createAction(CHANGE_PLAYERO);
