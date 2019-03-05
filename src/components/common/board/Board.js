import React from 'react';
import uuidv4 from 'src/utilities/uuid';
import Field from '../field/Field';

const baseClass = 'ttt-board';

const Board = (props) => {
  const { fields } = props;
  const handleClick = (index) => {
    const { onMove } = props;
    onMove(index);
  };

  return (
    <ol
      className={baseClass}
    >
      {fields.map((field, idx) => (
        <Field
          key={uuidv4()}
          index={idx}
          value={field}
          onClick={handleClick}
        />
      ))
            }
    </ol>
  );
};

export default Board;
