/*
 * You do not need to separate components and containers.
 * Feel free to connect your state and components directly in here (or other components).
 */
import React from 'react';
import { connect } from 'react-redux';

import Board from './Board';

const Game = () => (
  <div>
    <header>TicTacToe</header>

    <div className="Game">
      <Board />
    </div>
  </div>
);

export default connect(
  // do be implemented
)(Game);
