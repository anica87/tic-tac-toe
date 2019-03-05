/*
 * Replace the `alert` with the actual dispatch later on
 *
 * You already have utilit classes available to mark the current field selected by a player:
 *  .is-player-0
 *  .is-player-1
 *
 * Check out the src/index.html for pre-defined basic css classes.
 */
import React from 'react';
import SVGX from 'src/assets/images/SVGX.svg';
import SVGO from 'src/assets/images/SVGO.svg';
import { FIELD } from 'src/constants/game';
// eslint-disable-next-line no-console
// const handleClick = id => console.log(`Field with id ${id} was clicked`);
/* eslint-disable */

const baseClass = 'ttt-field';

const Field = (props) => {
  const { value } = props;
  const handleClick = () => {
    const { index, onClick } = props;

    onClick(index);
  };
  return (
    <li
      className={baseClass}
      onClick={handleClick}
    >
      {value === FIELD.X && (<SVGX className={`${baseClass}__sign`} />) }
      {value === FIELD.O && (<SVGO className={`${baseClass}__sign`} />) }

    </li>
  );
};
/* eslint-enable */

export default Field;
