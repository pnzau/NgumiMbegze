import React from 'react';
import { TableRow, TableCell, IconButton } from '@material-ui/core';
import styled from 'styled-components';

import { Drag, Delete } from '../../icons';

const Div = styled.div`
  color: rgba(0, 0, 0, 0.54);
`;

export const DraggableSong = (props) => {
  const { d, ...rest } = props;
  return (
    <TableRow className='py-3 my-2 mx-2 w-100' {...rest}>
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
        <div className='d-flex flex-row align-items-center'>
          <IconButton className='nm-shadow' color='primary'>
            <Delete color='inherit' size='sm' />
          </IconButton>
          <Div>
            <Drag size='sm' color='inherit' />
          </Div>
        </div>
      </TableCell>
    </TableRow>
  );
};
