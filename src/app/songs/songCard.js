import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core';
import { PlayArrowRounded, PlaylistAddRounded } from '@material-ui/icons';
import styled from 'styled-components';

const Div = styled.div`
  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[3]};
  }
`;

export const SongCard = () => {
  return (
    <Div className='w-100'>
      <Card className='w-100'>
        <CardActionArea>
          <CardMedia
            component='img'
            alt='Album'
            height='140'
            image='album_cover.jpg'
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
            <PlayArrowRounded />
          </IconButton>
          <IconButton className='nm-shadow' color='default'>
            <PlaylistAddRounded />
          </IconButton>
        </CardActions>
      </Card>
    </Div>
  );
};
