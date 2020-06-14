import React from 'react';

import { Layout } from '../shared/layout';
import { SongsTable } from '../songs/songsTable';
import { AlbumCover } from './albumCover';

export const ViewAlbum = () => {
  return (
    <Layout>
      <AlbumCover />
      <SongsTable />
    </Layout>
  );
};
