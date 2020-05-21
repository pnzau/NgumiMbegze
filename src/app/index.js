import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Typography } from '@material-ui/core';
import { rubberBand } from 'react-animations';
import { useHistory } from 'react-router-dom';

const rBand = keyframes`${rubberBand}`;

const Div = styled.div`
  height: 100vh;

  .nm-text {
    animation: 2s ${rBand};
  }
`;

export const Home = () => {
  const history = useHistory();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      history.push('/songs');
    }, 5000);
    return () => clearTimeout(timer);
  }, [history]);
  return (
    <Div className='container'>
      <div className='row h-100 align-items-center justify-content-center'>
        <div className='col-12'>
          <Typography
            variant='h2'
            component='h2'
            align='center'
            className='nm-text-branding nm-text'
          >
            Ngumi Mbwegze
          </Typography>
        </div>
      </div>
    </Div>
  );
};
