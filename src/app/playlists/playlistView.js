import React from 'react';

import { Layout } from '../shared/layout';
import { DropSongArea } from './dropSong';
import { SongContextProvider } from '../../context/songContext';

const Playlists = () => {
  return (
    <Layout>
      <DropSongArea />
    </Layout>
  );
};

export const PlaylistView = () => {
  return (
    <SongContextProvider>
      <Playlists />
    </SongContextProvider>
  );
};
