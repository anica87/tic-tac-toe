/*
 * You do not need to separate components and containers.
 * Feel free to connect your state and components directly in here (or other components).
 */
import React from 'react';

import Board from 'src/components/common/board';
import GameFooter from './Footer';
import GameHeader from './Header';

const baseClass = 'ttt-game';


const Game = ({
  board,
  scores,
  gameOver,
  changePlayerX,
  changePlayerO,
  playerX,
  playerO,
  handleMove,
}) => (
  <div>
    <GameHeader
      scores={scores}
      playerO={changePlayerO}
      playerX={changePlayerX}
      labelX={playerX}
      labelO={playerO}
    />
    <div className={baseClass}>
      {gameOver && <p className={`${baseClass}__message`}>Click to continue</p>}
      <Board fields={board} onMove={handleMove} />
    </div>
    <GameFooter />
  </div>
);
export default Game;
