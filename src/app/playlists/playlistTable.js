import React from 'react';
import styled from 'styled-components';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Tooltip,
  Button,
  Typography,
} from '@material-ui/core';
import { isEqual } from 'lodash';
import { useHistory } from 'react-router-dom';

import { Queue, Delete } from '../../icons';
import { DeletePlaylistModal } from './deletePlaylistModal';

const Div = styled.div`
  .nm-table {
    border-collapse: separate;
    border-spacing: 0px 5px;
  }

  .nm-table-cell-body {
    border: none;
  }

  .nm-table-row {
    cursor: pointer;
  }
`;

export const PlaylistTable = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const goToPlaylist = (id) => () => history.push(`/playlists/${id}`);

  const data = [
    {
      id: 1,
      title: 'Favourites',
      songsCount: 57,
    },
    {
      id: 2,
      title: 'Recently Added',
      songsCount: 57,
    },
    {
      id: 3,
      title: 'Chill Mode',
      songsCount: 57,
    },
  ];
  return (
    <Div className='w-100'>
      <Paper elevation={0} className='w-100  pt-4'>
        <DeletePlaylistModal open={open} handleClose={handleClose} />
        <TableContainer>
          <Table
            classes={{
              root: 'nm-table',
            }}
          >
            <TableBody>
              {data.map((datum) => (
                <TableRow key={datum.id}>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    <Button onClick={goToPlaylist(datum.id)}>
                      <Typography className='text-capitalize'>
                        {datum.title}
                      </Typography>
                    </Button>
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    {`${datum.songsCount} songs`}
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    <Tooltip title='Queue' placement='top'>
                      <IconButton className='nm-shadow' color='secondary'>
                        <Queue color='inherit' size='sm' />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    {!isEqual(datum.id, 1) && !isEqual(datum.id, 2) && (
                      <IconButton
                        className='nm-shadow'
                        color='primary'
                        onClick={handleOpen}
                      >
                        <Delete color='inherit' size='sm' />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Div>
  );
};
