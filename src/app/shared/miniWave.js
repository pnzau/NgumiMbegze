import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const bouncy = keyframes`
  0%{height:13px;}  
  30%{height:42px;}  
  60%{height:50px;}  
  80%{height:46px;}  
  100%{height:17px;}  
`;

const Bars = styled.div`
  width: 15px;
  height: 15px;
  bottom: 0px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  position: absolute;
  background: ${(props) =>
    props.pause
      ? props.theme.palette.grey[500]
      : props.theme.palette.primary.main};
  animation: ${bouncy} 0.5s infinite ease;
  left: ${(props) => props.no * 17}px;
  animation-delay: ${(props) => props.no * 0.1 + 0.3}s;
  animation-play-state: ${(props) => (props.pause ? 'paused' : 'running')};
`;

const Div = styled.div`
  min-height: 55px;
  overflow-x: hidden;
`;

export const MiniWave = ({ waveCount = 5, pause }) => {
  const items = Array(waveCount).fill(0);
  return (
    <Div className='position-relative mx-3'>
      {items.map((item, i) => (
        <Bars key={i} no={i} pause={pause} />
      ))}
    </Div>
  );
};
