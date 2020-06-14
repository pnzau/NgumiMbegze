import React from 'react';

import { Layout } from '../shared/layout';
import { SongsTable } from './songsTable';
import { RecentSongs } from './recentSongs';

export const SongsList = () => {
  return (
    <Layout>
      <RecentSongs />
      <SongsTable />
    </Layout>
  );
};
