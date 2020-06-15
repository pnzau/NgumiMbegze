import React from 'react';
import styled from 'styled-components';
import { IconButton, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { NowPlayingQueue } from './nowPlayingQueue';
import { Layout } from '../shared/layout';
import {
  SongContextProvider,
  SongContext,
  songActions,
} from '../../context/songContext';
import {
  UpArrow,
  Play,
  Pause,
  Previous,
  Next,
  Shuffle,
  Repeat,
  LeftArrow,
} from '../../icons';
import { SongBar } from './songBar';

const Div = styled.div`
  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[1]};
  }

  .sp-art-image {
    width: 100%;
    height: 500px;
    background-image: url(/art/album_cover.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .sp-arrow-back {
    margin-bottom: -70px;
  }
`;

const NowPlayingView = () => {
  const [state, dispatch] = React.useContext(SongContext);
  const history = useHistory();

  const handleShowSong = () =>
    dispatch({
      type: songActions.TOGGLE_NOW_PLAYING_QUEUE,
    });

  const handlePlaySong = () =>
    dispatch({
      type: songActions.TOGGLE_PLAY_SONG,
    });

  const handleGoBack = () => history.push('/songs');

  return (
    <Div className='w-100'>
      {!state.showNowPlayingQueue && (
        <>
          <div className='row mx-0'>
            <div className='col-12'>
              <IconButton
                className='sp-arrow-back'
                color='primary'
                onClick={handleGoBack}
              >
                <LeftArrow size='sm' />
              </IconButton>
              <div className='sp-art-image rounded' />
            </div>
            <div className='col-12'>
              <div className='d-flex flex-row justify-content-center'>
                <div className='d-flex flex-column justify-content-center pt-2 pb-3'>
                  <Typography align='center' variant='h5' color='textPrimary'>
                    Sink or swim
                  </Typography>
                  <Typography align='center' variant='h6' color='textSecondary'>
                    Circles
                  </Typography>
                  <Typography
                    align='center'
                    variant='body1'
                    color='textSecondary'
                  >
                    Mac miller
                  </Typography>
                </div>
              </div>
            </div>
            <div className='col-12'>
              <SongBar />
            </div>
            <div className='col-12'>
              <div className='d-flex flex-row justify-content-center pb-1'>
                <IconButton color='primary' className='px-3'>
                  <Shuffle />
                </IconButton>
                <IconButton color='primary' className='px-3'>
                  <Previous size='md' />
                </IconButton>
                <IconButton
                  onClick={handlePlaySong}
                  color='secondary'
                  className='nm-shadow mx-5'
                >
                  {state.playing ? <Play size='lg' /> : <Pause size='lg' />}
                </IconButton>
                <IconButton color='primary' className='px-3'>
                  <Next size='md' />
                </IconButton>
                <IconButton color='primary' className='px-3'>
                  <Repeat />
                </IconButton>
              </div>
              <div className='d-flex flex-row justify-content-center pt-1 pb-2'>
                <IconButton onClick={handleShowSong}>
                  <UpArrow size='sm' />
                </IconButton>
              </div>
            </div>
          </div>
        </>
      )}
      {state.showNowPlayingQueue && <NowPlayingQueue />}
    </Div>
  );
};

export const NowPlaying = () => {
  return (
    <SongContextProvider>
      <Layout>
        <NowPlayingView />
      </Layout>
    </SongContextProvider>
  );
};
