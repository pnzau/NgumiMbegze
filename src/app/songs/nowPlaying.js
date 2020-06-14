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

const Div = styled.div`
  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[1]};
  }

  .sp-art-image {
    width: 100%;
    max-height: 400px;
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

  const handleGoBack = () => history.goBack();

  return (
    <Div className='w-100'>
      {!state.showNowPlayingQueue && (
        <>
          <div className='row mx-0'>
            <div className='col-12'>
              <div className='d-flex flex-row justify-content-start'>
                <IconButton onClick={handleGoBack}>
                  <LeftArrow />
                </IconButton>
              </div>
              <div className='col-12'>
                <img
                  alt='album cover'
                  src='/art/album_cover.jpg'
                  className='img-fluid rounded sp-art-image'
                />
              </div>
              <div className='col-12'>
                <div className='d-flex flex-row justify-content-center pt-4 pb-3'>
                  <IconButton color='primary' className='px-3'>
                    <Shuffle size='md' />
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
                    <Repeat size='md' />
                  </IconButton>
                </div>
                <div className='d-flex flex-row justify-content-center pt-1 pb-2'>
                  <IconButton onClick={handleShowSong}>
                    <UpArrow size='sm' />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <div className='d-flex flex-column justify-content-end h-100'>
                <div className='d-flex flex-column justify-content-end flex-grow-1 pb-3'>
                  <Typography variant='h4'>Mac miller</Typography>
                  <Typography variant='h5' color='textSecondary'>
                    Sink or swim
                  </Typography>
                  <Typography variant='body1' color='textSecondary'>
                    Hip-Hop
                  </Typography>
                </div>
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
