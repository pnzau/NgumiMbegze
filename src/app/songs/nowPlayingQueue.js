import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { DropSongArea } from './dropSong';

export const NowPlayingQueue = () => {
  const onDragEnd = () => {};

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <DropSongArea />
    </DragDropContext>
  );
};
