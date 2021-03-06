import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  IconButton,
} from '@material-ui/core';

import { DraggableSong } from './draggableSong';
import { DownArrow } from '../../icons';
import { SongContext, songActions } from '../../context/songContext';

const Div = styled.div`
  .nm-table {
    border-collapse: separate;
    border-spacing: 0px 5px;
  }

  .nm-table-cell-body {
    border: none;
  }
`;

export const DropSongArea = () => {
  const [state, dispatch] = React.useContext(SongContext);

  const handleHideSong = () =>
    dispatch({
      type: songActions.TOGGLE_NOW_PLAYING_QUEUE,
    });

  const titles = ['#', 'Song', 'Artist', 'Time', ''];

  return (
    <Droppable droppableId='queued-song'>
      {(provided) => (
        <Div className='' ref={provided.innerRef} {...provided.droppableProps}>
          <Paper elevation={0} className='w-100'>
            <div className='py-3 w-100 d-flex flex-row justify-content-center'>
              <IconButton onClick={handleHideSong}>
                <DownArrow size='sm' />
              </IconButton>
            </div>
            <TableContainer>
              <Table
                classes={{
                  root: 'nm-table',
                }}
              >
                <TableHead>
                  <TableRow>
                    {titles.map((title) => (
                      <TableCell key={title}>{title}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.songs.map((d, i) => (
                    <DraggableSong d={d} key={d.id} index={i} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          {provided.placeholder}
        </Div>
      )}
    </Droppable>
  );
};
