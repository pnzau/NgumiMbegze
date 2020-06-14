import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { DropSongArea } from './dropSong';
import { SongContext } from '../../context/songContext';

export const NowPlayingQueue = () => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DropSongArea />
    </DragDropContext>
  );
};
