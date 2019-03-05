import { emptyBoard } from 'src/utilities/game';
import { PLAYER } from 'src/constants/game';

const initialState = () => ({
  player: PLAYER.X,
  playerNameX: 'Player X',
  playerNameO: 'Player O',
  board: emptyBoard(),
  scores: { X: 0, O: 0, draw: 0 },
  winner: undefined,
  gameOver: false,
});

export default initialState;
