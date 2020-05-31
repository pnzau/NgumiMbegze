import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { DraggableSong } from './draggableSong';

const div = styled.div``;

export const DropSongArea = (props) => {
  const { data } = props;
  return (
    <Droppable droppableId='queued-song'>
      {(provided) => (
        <div className='' ref={provided.innerRef} {...provided.droppableProps}>
          {data.map((d, i) => (
            <DraggableSong d={d} key={d.id} index={i} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
