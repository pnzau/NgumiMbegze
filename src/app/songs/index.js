import React from 'react';

import { Layout } from '../shared/layout';
import { SongsTable } from './songsTable';

export const SongsList = () => {
  return (
    <Layout>
      <SongsTable />
    </Layout>
  );
};
