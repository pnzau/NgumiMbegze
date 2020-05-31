import React from 'react';
import styled from 'styled-components';
import { Typography, IconButton } from '@material-ui/core';
import {
  PlayArrowRounded,
  PauseRounded,
  ReplayRounded,
  SkipNextRounded,
  SkipPreviousRounded,
  ShuffleRounded,
  RepeatRounded,
  RepeatOneRounded,
} from '@material-ui/icons';

import { MiniWave } from '../shared/miniWave';
import { SongPlayProgressBar } from './songPlayProgressbar';

const Div = styled.div`
  background: ${(props) => props.theme.palette.background.paper};
  box-shadow: ${(props) => props.theme.shadows[6]};
  height: 40vh;
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
  overflow-y: auto;

  .nm-header {
    background: ${(props) => props.theme.palette.background.default};
    border-top-right-radius: 22px;
    border-top-left-radius: 22px;
  }

  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[3]};
  }
`;

export const NowPlaying = () => {
  const [playing, setPlaying] = React.useState(true);
  const [toggleCount, setToggleCount] = React.useState(0);

  const handleToggleReplay = () => {
    if (toggleCount < 3) {
      setToggleCount(toggleCount + 1);
    } else {
      setToggleCount(0);
    }
  };

  const pickIcon = () => {
    if (toggleCount < 2) {
      return <ReplayRounded />;
    } else if (toggleCount === 2) {
      return <RepeatOneRounded />;
    } else {
      return <RepeatRounded />;
    }
  };

  const togglePlaying = () => setPlaying(!playing);
  return (
    <Div className='w-100'>
      <div className='pt-4 px-2 pb-2 w-100 nm-header'>
        <Typography variant='caption'>Liquideep - Fairy tale</Typography>
      </div>
      {/* <div className='pt-3 w-100'>
        <MiniWave waveCount={15} pause={!playing} />
      </div> */}
      {/* <SongPlayProgressBar />
      <div className='d-flex flex-row align-items-center justify-content-between pt-3 px-2'>
        <IconButton size='small' className='nm-shadow'>
          <ShuffleRounded />
        </IconButton>
        <IconButton className='nm-shadow'>
          <SkipPreviousRounded />
        </IconButton>
        <IconButton
          className='nm-shadow'
          color='primary'
          onClick={togglePlaying}
        >
          {playing ? (
            <PauseRounded fontSize='large' />
          ) : (
            <PlayArrowRounded fontSize='large' />
          )}
        </IconButton>
        <IconButton className='nm-shadow'>
          <SkipNextRounded />
        </IconButton>

        <IconButton
          onClick={handleToggleReplay}
          size='small'
          className='nm-shadow'
          color={toggleCount > 0 ? 'primary' : 'default'}
        >
          {pickIcon()}
        </IconButton>
      </div> */}
    </Div>
  );
};
