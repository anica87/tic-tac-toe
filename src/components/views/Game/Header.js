import React from 'react';
import Score from 'src/components/common/score';

const baseClass = 'ttt-game-header';

const GameHeader = (props) => {
  const {
    scores,
    playerO,
    playerX,
    labelX,
    labelO,
  } = props;
  const { X, O, draw } = scores;

  return (
    <div className={baseClass}>
      <h1>Tic Tac Toe</h1>
      <div className={`${baseClass}__scores`}>
        <Score player={playerX} value={X} label={labelX} />
        <Score value={draw} label="Draw" />
        <Score player={playerO} value={O} label={labelO} />
      </div>
    </div>
  );
};


export default GameHeader;
