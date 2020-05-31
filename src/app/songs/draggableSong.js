import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export const DraggableSong = (props) => {
  const { d, index } = props;
  return (
    <Draggable draggableId={d.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='py-3 shadow-sm my-2 mx-2'
        >
          {JSON.stringify(d)}
        </div>
      )}
    </Draggable>
  );
};
