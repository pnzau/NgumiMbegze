import React, { useReducer, createContext } from 'react';

export const songActions = {
  TOGGLE_NOW_PLAYING_QUEUE: 'TOGGLE_NOW_PLAYING_QUEUE',
  TOGGLE_PLAY_SONG: 'TOGGLE_PLAY_SONG',
};

export const SongContext = createContext();

const initialState = {
  showNowPlayingQueue: false,
  playing: false,
  songs: [
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
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case songActions.TOGGLE_NOW_PLAYING_QUEUE:
      return {
        ...state,
        showNowPlayingQueue: !state.showNowPlayingQueue,
      };
    case songActions.TOGGLE_PLAY_SONG:
      return {
        ...state,
        playing: !state.playing,
      };
    default:
      return state;
  }
};

export const SongContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SongContext.Provider value={[state, dispatch]}>
      {props.children}
    </SongContext.Provider>
  );
};
