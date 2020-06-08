import React from 'react';
import { Typography, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components';

import { SongCard } from './songCard';
import { Search } from '../../icons';

const Div = styled.div``;

export const RecentSongs = () => {
  const songs = Array(4).fill(0);
  return (
    <Div className='pt-4'>
      <div className='d-flex flex-row align-items-center justify-content-between'>
        <Typography className='px-3' variant='h5'>
          Songs
        </Typography>
        <TextField
          variant='outlined'
          margin='dense'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search size='md' />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className='d-flex flex-row align-items-center flex-wrap pt-3 pb-5'>
        {songs.map((song, i) => (
          <div className='col-lg-3 col-md-6 col-6 pb-2' key={i}>
            <SongCard />
          </div>
        ))}
      </div>
    </Div>
  );
};
