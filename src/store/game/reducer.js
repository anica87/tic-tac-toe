import { emptyBoard } from 'src/utilities/game';
import * as actions from './actions';
import initialState from './state';


export default (state = initialState(), action) => {
  const { payload, type } = action;
  switch (type) {
    case actions.NEW_GAME:
      return { ...state, board: emptyBoard(), gameOver: false };
    case actions.CHANGE_BOARD_GAME:
      return { ...state, board: payload };
    case actions.CHANGE_SCORES_GAME:
      return { ...state, scores: payload };
    case actions.CHANGE_WINNER_GAME:
      return { ...state, winner: payload };
    case actions.CHANGE_PLAYER_GAME:
      return { ...state, player: payload };
    case actions.END_GAME:
      return { ...state, gameOver: true };
    case actions.CHANGE_PLAYERX:
      return { ...state, playerNameX: payload };
    case actions.CHANGE_PLAYERO:
      return { ...state, playerNameO: payload };
    default:
      return state;
  }
};
