import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { Layout } from '../shared/layout';
import { DropSongArea } from './dropSong';

export const NowPlayingView = () => {
  const data = [
    {
      id: '10',
      number: 1,
      title: 'Gang gang',
      artist: 'Mkhaladam',

      time: '4:13',
      genre: 'Hip Hop',
      like: false,
    },
    {
      id: '11',
      number: 2,
      title: 'Jazzing in the midnight â, î or ô',
      artist: 'Nkhurunzinza',

      time: '4:13',
      genre: 'Jazz',
      like: false,
    },
    {
      id: '12',
      number: 3,
      title: 'Cream top',
      artist: 'Langham',

      time: '4:13',
      genre: 'Hip Hop',
      like: false,
    },
    {
      id: '13',
      number: 4,
      title: 'Cheasy',
      artist: 'Made it tags',

      time: '4:13',
      genre: 'Hip Hop',
      like: true,
    },
    {
      id: '14',
      number: 5,
      title: 'Don Chidle',
      artist: 'Tuffletoff',

      time: '4:13',
      genre: 'Hip Hop',
      like: false,
    },
    {
      id: '15',
      number: 6,
      title: 'Kredi kiboom',
      artist: 'Mkhaladam',

      time: '4:13',
      genre: 'Hip Hop',
      like: false,
    },
  ];

  const onDragEnd = () => {};

  return (
    <Layout>
      <DragDropContext onDragEnd={onDragEnd}>
        <DropSongArea data={data} />
      </DragDropContext>
    </Layout>
  );
};
