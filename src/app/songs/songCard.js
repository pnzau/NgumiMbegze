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

import { Play, AddToPlaylist } from '../../icons';

const Div = styled.div`
  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[1]};
  }
`;

export const SongCard = () => {
  return (
    <Div className='w-100'>
      <Card variant='outlined' className='w-100'>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Album'
            height='140'
            image='art/album_cover.jpg'
            title='Album'
          />
          <CardContent>
            <Typography variant='body1'>Mac miller</Typography>
            <Typography variant='body2' color='textSecondary'>
              Swimming in circles
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton className='nm-shadow' color='secondary'>
            <Play color='inherit' />
          </IconButton>
          <IconButton className='nm-shadow' color='secondary'>
            <Tooltip title='Queue' placement='top'>
              <AddToPlaylist color='inherit' />
            </Tooltip>
          </IconButton>
        </CardActions>
      </Card>
    </Div>
  );
};
