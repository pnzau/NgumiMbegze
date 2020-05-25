import React from 'react';
import { Typography } from '@material-ui/core';

import { SongCard } from './songCard';

export const RecentSongs = () => {
  const songs = Array(4).fill(0);
  return (
    <div className=''>
      <Typography className='px-3' variant='body1'>
        Recently Played Songs
      </Typography>
      <div className='d-flex flex-row align-items-center flex-wrap pt-3 pb-5'>
        {songs.map((song, i) => (
          <div className='col-lg-3 col-6 pb-1' key={i}>
            <SongCard />
          </div>
        ))}
      </div>
    </div>
  );
};
