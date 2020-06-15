import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TableRow, TableCell } from '@material-ui/core';
import styled from 'styled-components';

import { Drag } from '../../icons';

const Div = styled.div`
  color: rgba(0, 0, 0, 0.54);
`;

export const DraggableSong = (props) => {
  const { d, index } = props;
  return (
    <Draggable draggableId={d.id} index={index}>
      {(provided) => (
        <TableRow
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='py-3 my-2 mx-2 w-100'
        >
          <TableCell
            classes={{
              root: 'nm-table-cell-body',
            }}
          >
            {d.number}
          </TableCell>
          <TableCell
            classes={{
              root: 'nm-table-cell-body',
            }}
          >
            {d.title}
          </TableCell>
          <TableCell
            classes={{
              root: 'nm-table-cell-body',
            }}
          >
            {d.artist}
          </TableCell>
          <TableCell
            classes={{
              root: 'nm-table-cell-body',
            }}
          >
            {d.time}
          </TableCell>
          <TableCell
            classes={{
              root: 'nm-table-cell-body',
            }}
          >
            <Div>
              <Drag size='sm' color='inherit' />
            </Div>
          </TableCell>
        </TableRow>
      )}
    </Draggable>
  );
};
