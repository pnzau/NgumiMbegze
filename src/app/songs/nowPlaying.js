import React from 'react';
import styled from 'styled-components';
import { Typography, IconButton } from '@material-ui/core';

const Div = styled.div`
  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[3]};
  }
`;

export const NowPlaying = () => {
  const [playing, setPlaying] = React.useState(true);

  const togglePlaying = () => setPlaying(!playing);
  return <Div className='w-100'></Div>;
};
