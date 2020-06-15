import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { Play, Queue } from '../../icons';

const Div = styled.div`
  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[1]};
  }
`;

export const AlbumArtistCard = () => {
  const history = useHistory();
  const goTo = () => history.push('/albums/23');

  return (
    <Div className='w-100 pb-3'>
      <Card variant='outlined' className='w-100'>
        <CardActionArea onClick={goTo}>
          <CardMedia
            component='img'
            alt='Album'
            height='140'
            image='/art/album_cover.jpg'
            title='Album'
          />
          <CardContent>
            <Typography variant='body1'>Circles</Typography>
            <Typography variant='body2' color='textSecondary'>
              2018
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton className='nm-shadow' color='secondary'>
            <Play size='normal' color='inherit' />
          </IconButton>
          <IconButton className='nm-shadow' color='secondary'>
            <Tooltip title='Queue' placement='top'>
              <Queue size='normal' color='inherit' />
            </Tooltip>
          </IconButton>
        </CardActions>
      </Card>
    </Div>
  );
};
