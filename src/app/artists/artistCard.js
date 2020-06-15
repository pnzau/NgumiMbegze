import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Div = styled.div`
  cursor: pointer;

  .nm-shadow {
    box-shadow: ${(props) => props.theme.shadows[3]};
  }

  .sp-artist-image {
    height: 200px;
    width: 200px;
    background-image: url(/art/album_cover.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const ArtistCard = () => {
  const history = useHistory();

  const goToArtist = () => history.push('/artists/33');

  return (
    <Div
      className='d-flex flex-column align-items-center pb-2'
      role='button'
      onClick={goToArtist}
    >
      <div className='rounded-circle sp-artist-image nm-shadow mb-1' />
      <Typography align='center' variant='h5'>
        Mac Miller
      </Typography>
    </Div>
  );
};
