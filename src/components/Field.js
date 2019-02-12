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

// eslint-disable-next-line no-console
const handleClick = id => console.log(`Field with id ${id} was clicked`);

const Field = ({
  id,
}) => (
  <div
    className="Field"
    role="presentation"
    onClick={() => handleClick(id)}
  />
);

export default Field;
