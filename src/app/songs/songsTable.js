import React from 'react';
import styled from 'styled-components';
import {
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  IconButton,
  Typography,
} from '@material-ui/core';

import {
  ThumbUpRounded,
  PlayArrowRounded,
  PlaylistAddRounded,
} from '@material-ui/icons';

const Div = styled.div`
  .nm-table {
    border-collapse: separate;
    border-spacing: 0px 5px;
  }

  .nm-table-cell-body {
    border: none;
  }

  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[3]};
  }
`;

export const SongsTable = () => {
  const titles = [
    '#',
    '',
    'Song',
    'Artist',
    'Daily Plays',
    'Time',
    'Genre',
    '',
  ];
  const data = [
    {
      number: 1,
      title: 'Gang gang',
      artist: 'Mkhaladam',
      played: 3000,
      time: '4:13',
      genre: 'Hip Hop',
      like: false,
    },
    {
      number: 2,
      title: 'Jazzing in the midnight',
      artist: 'Nkhurunzinza',
      played: 3000,
      time: '4:13',
      genre: 'Jazz',
      like: false,
    },
    {
      number: 3,
      title: 'Cream top',
      artist: 'Langham',
      played: 3000,
      time: '4:13',
      genre: 'Hip Hop',
      like: false,
    },
    {
      number: 4,
      title: 'Cheasy',
      artist: 'Made it tags',
      played: 3000,
      time: '4:13',
      genre: 'Hip Hop',
      like: true,
    },
    {
      number: 5,
      title: 'Don Chidle',
      artist: 'Tuffletoff',
      played: 3000,
      time: '4:13',
      genre: 'Hip Hop',
      like: false,
    },
    {
      number: 4,
      title: 'Kredi kiboom',
      artist: 'Mkhaladam',
      played: 3000,
      time: '4:13',
      genre: 'Hip Hop',
      like: false,
    },
  ];
  return (
    <Div className='w-100'>
      <Paper elevation={0} className='w-100'>
        <Typography className='px-3' variant='body1'>
          All Songs
        </Typography>
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
              {data.map((datum) => (
                <TableRow key={datum.title}>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    {datum.number}
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    <IconButton
                      className='nm-shadow'
                      color={datum.like ? 'secondary' : 'default'}
                    >
                      <ThumbUpRounded fontSize='small' />
                    </IconButton>
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    {datum.title}
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    {datum.artist}
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    {datum.played}
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    {datum.time}
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    {datum.genre}
                  </TableCell>
                  <TableCell
                    classes={{
                      root: 'nm-table-cell-body',
                    }}
                  >
                    <div className='d-flex flex-row align-items-center justify-content-between'>
                      <IconButton className='nm-shadow' color='secondary'>
                        <PlayArrowRounded fontSize='small' />
                      </IconButton>
                      <IconButton className='nm-shadow' color='default'>
                        <PlaylistAddRounded fontSize='small' />
                      </IconButton>
                    </div>
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
