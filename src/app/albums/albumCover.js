import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Div = styled.div`
  .sp-image {
    height: 400px;
    width: 400px;
    background-image: url(/art/album_cover.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const AlbumCover = () => {
  return (
    <Div className='pt-3 pb-2 d-flex flex-row flex-wrap align-items-end'>
      <div className='d-flex flex-row px-2'>
        <div className='rounded sp-image' />
        <div className='d-flex flex-column pl-3 justify-content-end pb-3'>
          <Typography variant='h4'>Mac miller</Typography>
          <Typography variant='h5' color='textSecondary'>
            Circles
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            2018
          </Typography>
        </div>
      </div>
    </Div>
  );
};
