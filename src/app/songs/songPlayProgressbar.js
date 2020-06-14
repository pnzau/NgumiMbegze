import React from 'react';
import { LinearProgress, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Div = styled.div`
  .MuiLinearProgress-root {
    height: 10px;
    border-radius: 16px;
  }

  .MuiLinearProgress-bar {
    border-radius: 18px;
  }
`;

export const SongPlayProgressBar = () => {
  return (
    <Div className='w-100 py-1 px-1'>
      <div className='w-100 d-flex flex-row align-items-center justify-content-between'>
        <Typography variant='subtitle2'>1.05</Typography>
        <Typography variant='subtitle2'>4.05</Typography>
      </div>
      <LinearProgress variant='determinate' color='primary' value={50} />
    </Div>
  );
};
