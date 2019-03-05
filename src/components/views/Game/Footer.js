import React from 'react';

const baseClass = 'ttt-game-footer';

const GameFooter = () => (
  <footer className={baseClass}>
    # Tic-tac-toe with React/Redux by
    {' '}
    <a
      href="https://www.linkedin.com/in/anica-mijailovic-4932a015/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Anica Mijailovic
    </a>
  </footer>
);

export default GameFooter;
