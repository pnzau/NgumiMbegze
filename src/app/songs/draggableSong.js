import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { TableRow, TableCell, IconButton } from '@material-ui/core';

import { Menu } from '../../icons';

export const DraggableSong = (props) => {
  const { d, index } = props;
  return (
    <Draggable draggableId={d.id} index={index}>
      {(provided) => (
        <TableRow
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className='py-3 my-2 mx-2'
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
            <IconButton disabled className='nm-shadow'>
              <Menu color='inherit' />
            </IconButton>
          </TableCell>
        </TableRow>
      )}
    </Draggable>
  );
};
