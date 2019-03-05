import { PLAYER, FIELD } from 'src/constants/game';

const emptyBoard = () => [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
];

const winningCombination = [
  // horizontal
  [0, 1, 2], // upper 0
  [3, 4, 5], // middle 1
  [6, 7, 8], // lower 2

  // vertical
  [0, 3, 6], // left    3
  [1, 4, 7], // center  4
  [2, 5, 8], // right   5

  // crossed
  [0, 4, 8], // major 7
  [2, 4, 6], // minor 8
];

const getStatus = (board) => {
  return winningCombination.map(line => line.reduce((sum, index) => sum + board[index], 0));
};

const isFull = board => board.every(field => field !== FIELD.Empty);

const hasWon = (player, board) => getStatus(board).some(line => line === player * 3);

const hasWinner = board => hasWon(PLAYER.X, board) || hasWon(PLAYER.O, board);

const isDraw = board => isFull(board) && !hasWinner(board);

const isOver = board => isFull(board) || hasWinner(board) || isDraw(board);

const isOccupied = (board, idx) => board[idx] !== FIELD.Empty;

const isFree = (board, idx) => !isOccupied(board, idx);

const canMove = (board, player, idx) => isFree(board, idx);

const playMove = (board, player, idx) => {
  const nextBoard = [
    ...board.slice(0, idx),
    player === PLAYER.X ? FIELD.X : FIELD.O,
    ...board.slice(idx + 1),
  ];
  return nextBoard;
};

const switchPlayer = player => (player === PLAYER.X ? PLAYER.O : PLAYER.X);

/* eslint-disable */
const getWinner = board => (hasWon(PLAYER.X, board) ? PLAYER.X
  : hasWon(PLAYER.O, board) ? PLAYER.O : PLAYER.Noone);
/* eslint-enable */

const updateScores = (scores, winner) => {
  const nextScores = { ...scores };
  if (winner === PLAYER.Noone) {
    nextScores.draw += 1;
  } else {
    const winnerPlayer = Object.keys(PLAYER).find(key => PLAYER[key] === winner);
    nextScores[winnerPlayer] += 1;
  }
  return nextScores;
};

const play = (props) => {
  const {
    board,
    player,
    field,
    scores,
  } = props;


  return function (actions) {
    const {
      onNewGame,
      onBoardChange,
      onScoresChange,
      onPlayerChange,
      onWinnerChange,
      onGameOver,
    } = actions;


    // 1. check is game over
    if (isOver(board)) {
      onPlayerChange(PLAYER.X);
      // return onNewGame && onNewGame();
      onNewGame();
      return;
    }


    // 2. check is player can move on desired field
    if (!canMove(board, player, field)) {
      return;
    }

    // 3. play move
    const nextBoard = playMove(board, player, field);
    onBoardChange(nextBoard);

    // do we have a winner?
    if (hasWinner(nextBoard)) {
      const winner = getWinner(nextBoard);
      const nextScores = updateScores(scores, winner);

      onScoresChange(nextScores);
      onWinnerChange(winner);
      onGameOver();
      onPlayerChange(PLAYER.X);
    } else if (isDraw(nextBoard)) {
      const nextScores = updateScores(scores, PLAYER.Noone);
      onScoresChange(nextScores);
      onWinnerChange(PLAYER.Noone);
      onPlayerChange(PLAYER.X);
      onGameOver();
    }

    // 4.switch players
    const nextPlayer = switchPlayer(player);
    onPlayerChange(nextPlayer);
  };
};

export {
  emptyBoard,
  play,
};
