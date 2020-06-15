import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import styled from 'styled-components';

import { AlbumArtistCard } from './albumArtistCard';
import { Layout } from '../shared/layout';
import { Info } from '../../icons';
import { InfoCard } from './infoCard';

const Div = styled.div``;

export const ArtistView = () => {
  const [open, setOpen] = React.useState(false);
  const albums = Array(8).fill(0);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Layout>
      <InfoCard open={open} handleClose={handleClose} />
      <Div className='pt-4'>
        <div className='d-flex flex-row align-items-center justify-content-between'>
          <Typography className='px-3' variant='h5'>
            Mac Miller
          </Typography>
          <IconButton color='primary' onClick={handleOpen}>
            <Info size='sm' />
          </IconButton>
        </div>
        <div className='d-flex flex-row align-items-center flex-wrap pt-3 pb-5'>
          {albums.map((album, i) => (
            <div className='col-lg-3 col-6 pb-1' key={i}>
              <AlbumArtistCard />
            </div>
          ))}
        </div>
      </Div>
    </Layout>
  );
};
