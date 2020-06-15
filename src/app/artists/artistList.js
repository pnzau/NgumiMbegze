import React from 'react';
import { Typography, TextField, InputAdornment } from '@material-ui/core';
import styled from 'styled-components';

import { ArtistCard } from './artistCard';
import { Layout } from '../shared/layout';
import { Search } from '../../icons';

const Div = styled.div``;

export const ArtistList = () => {
  return (
    <Layout>
      <Div className='py-2 row mx-0'>
        <div className='col-12'>
          <div className='d-flex flex-row justify-content-end'>
            <TextField
              variant='outlined'
              margin='dense'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Search size='sm' />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
        <div className='col-12 mb-2 border rounded'>
          <Typography variant='h3'>M</Typography>
        </div>

        {Array(5)
          .fill(0)
          .map((v, i) => (
            <div className='col-lg-3 col-md-4 col-12' key={i}>
              <ArtistCard />
            </div>
          ))}
      </Div>
    </Layout>
  );
};
