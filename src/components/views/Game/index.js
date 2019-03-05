// @flow
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import {
  newGame, changeBoard, changePlayer, changeScores, changeWinner,
  endGame, changePlayerX, changePlayerO,
} from 'src/store/game/actions';
import {
  getBoard, isGameOver, getPlayer, getScores, getWinner, getPlayerX, getPlayerO,
} from 'src/store/game/selectors';

import { play } from 'src/utilities/game';

import Game from './Game';

/* eslint-disable */
const actions = {
  newGame,
  changeBoard,
  changePlayer,
  changeScores,
  changeWinner,
  endGame,
  changePlayerX,
  changePlayerO,
};

const mapStateToProps = state => ({
  board: getBoard(state),
  player: getPlayer(state),
  scores: getScores(state),
  winner: getWinner(state),
  gameOver: isGameOver(state),
  playerX: getPlayerX(state),
  playerO: getPlayerO(state),
});

export default compose(
  connect(mapStateToProps, actions),
  withHandlers({
    handleMove: ({
      board,
      player,
      scores,
      winner,
      newGame,
      gameOver,
      changeBoard,
      changePlayer,
      changeScores,
      changeWinner,
      endGame,

    }) => (field) => {
      play({
        board,
        player,
        scores,
        field,
        winner,
        gameOver,
      })({
        onNewGame: newGame,
        onBoardChange: changeBoard,
        onScoresChange: changeScores,
        onPlayerChange: changePlayer,
        onWinnerChange: changeWinner,
        onGameOver: endGame,
      });
    },
  }),
)(Game);
/* eslint-enable */
