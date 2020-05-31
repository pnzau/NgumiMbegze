import React from 'react';
import { Typography, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components';

import { AlbumCard } from './albumCard';
import { Search } from '../../icons';

const Div = styled.div``;

export const AlbumList = () => {
  const albums = Array(8).fill(0);
  return (
    <Div className='pt-4'>
      <div className='d-flex flex-row align-items-center justify-content-between'>
        <Typography className='px-3' variant='h5'>
          Albums
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
        {albums.map((album, i) => (
          <div className='col-lg-3 col-6 pb-1' key={i}>
            <AlbumCard />
          </div>
        ))}
      </div>
    </Div>
  );
};
