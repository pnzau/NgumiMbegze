import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Div = styled.div`
  height: 10px;
  background-color: #e0e0de;
  cursor: pointer;

  .sp-filler {
    height: 100%;
    width: ${(props) => props.barWidth}%;
    background-color: ${(props) => props.theme.palette.secondary.main};
    border-radius: inherit;
  }
`;

export const SongBar = () => {
  const barRef = React.useRef(null);
  const [barWidth, setBarWidth] = React.useState(0);

  const showWhereClicked = (e) => {
    const itemWidth = barRef.current.offsetWidth;
    const innerWidth = e.pageX;
    const width = Math.floor((innerWidth / itemWidth) * 100);
    const decidedWidth = width > 100 ? 100 : width;
    setBarWidth(decidedWidth);
  };

  return (
    <div className='d-flex flex-row align-items-center pb-1'>
      <Typography variant='caption'>2:01</Typography>
      <Div
        className='w-100 rounded-pill mx-2'
        role='button'
        onClick={showWhereClicked}
        ref={barRef}
        barWidth={barWidth}
      >
        <div className='sp-filler'></div>
      </Div>
      <Typography variant='caption'>5:01</Typography>
    </div>
  );
};
