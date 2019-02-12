import React from 'react';
import Field from './Field';

const fields = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Board = () => (
  <div className="Board">
    {fields.map(id => <Field id={id} key={id} />)}
  </div>
);

export default Board;
