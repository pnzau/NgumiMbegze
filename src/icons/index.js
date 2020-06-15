import styled, { css } from 'styled-components';

import { ReactComponent as FavoriteIcon } from './fire.svg';
import { ReactComponent as PlaylistIcon } from './playlists.svg';
import { ReactComponent as HeadphonesIcon } from './headphones.svg';
import { ReactComponent as SongsIcon } from './songs.svg';
import { ReactComponent as AlbumIcon } from './record.svg';
import { ReactComponent as PlayIcon } from './032-play.svg';
import { ReactComponent as QueueIcon } from './plus.svg';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as LikeIcon } from './like.svg';
import { ReactComponent as DragIcon } from './050-arrow.svg';
import { ReactComponent as ChevronRight } from './026-right chevron.svg';
import { ReactComponent as PreviousIcon } from './009-undo.svg';
import { ReactComponent as PauseIcon } from './pause.svg';
import { ReactComponent as ShuffleIcon } from './004-suffle.svg';
import { ReactComponent as RepeatOnceIcon } from './046-infinity.svg';
import { ReactComponent as RepeatIcon } from './013-reload.svg';
import { ReactComponent as ArtistsIcon } from './artists.svg';
import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as DeleteIcon } from './delete.svg';

const baseIconStyles = css`
  font-size: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '3.4rem';
      case 'md':
        return '3rem';
      case 'normal':
        return '2rem';
      case 'sm':
        return '1.8rem';
      default:
        return '2.8rem';
    }
  }};
  fill: ${(props) => {
    switch (props.color) {
      case 'secondary':
        return props.theme.palette.secondary.main;
      case 'primary':
        return props.theme.palette.primary.main;
      case 'inherit':
        return 'currentColor';
      default:
        return '#000';
    }
  }};
  width: 1em;
  height: 1em;
  g {
    fill: ${(props) => {
      switch (props.color) {
        case 'secondary':
          return props.theme.palette.secondary.main;
        case 'primary':
          return props.theme.palette.primary.main;
        default:
          return 'currentColor';
      }
    }};
  }
`;

export const Favorite = styled(FavoriteIcon)`
  ${baseIconStyles}
`;

export const Playlist = styled(PlaylistIcon)`
  ${baseIconStyles}
`;

export const Headphone = styled(HeadphonesIcon)`
  ${baseIconStyles}
`;

export const Music = styled(SongsIcon)`
  ${baseIconStyles}
`;

export const Album = styled(AlbumIcon)`
  ${baseIconStyles}
  circle: {
    fill: ${(props) => {
      switch (props.color) {
        case 'secondary':
          return props.theme.palette.secondary.main;
        case 'primary':
          return props.theme.palette.primary.main;
        default:
          return 'currentColor';
      }
    }};
  }
  path {
    fill: ${(props) => {
      switch (props.color) {
        case 'secondary':
          return props.theme.palette.secondary.main;
        case 'primary':
          return props.theme.palette.primary.main;
        default:
          return 'currentColor';
      }
    }};
  }
`;

export const Play = styled(PlayIcon)`
  ${baseIconStyles}
`;

export const Queue = styled(QueueIcon)`
  ${baseIconStyles}
`;

export const Search = styled(SearchIcon)`
  ${baseIconStyles}
`;

export const Like = styled(LikeIcon)`
  ${baseIconStyles}
`;

export const Drag = styled(DragIcon)`
  ${baseIconStyles}
`;

export const UpArrow = styled(ChevronRight)`
  ${baseIconStyles}
  transform:rotate(-90deg);
`;

export const DownArrow = styled(ChevronRight)`
  ${baseIconStyles}
  transform:rotate(90deg);
`;

export const LeftArrow = styled(ChevronRight)`
  ${baseIconStyles}
  transform:rotate(180deg);
`;

export const Next = styled(PreviousIcon)`
  ${baseIconStyles}
  transform:rotate(180deg);
  transform: scaleX(-1);
`;

export const Previous = styled(PreviousIcon)`
  ${baseIconStyles}
`;

export const Pause = styled(PauseIcon)`
  ${baseIconStyles}
`;

export const Repeat = styled(RepeatIcon)`
  ${baseIconStyles}
`;

export const RepeatOnce = styled(RepeatOnceIcon)`
  ${baseIconStyles}
`;

export const Shuffle = styled(ShuffleIcon)`
  ${baseIconStyles}
`;

export const Artists = styled(ArtistsIcon)`
  ${baseIconStyles}
`;

export const Info = styled(InfoIcon)`
  ${baseIconStyles}
`;

export const Delete = styled(DeleteIcon)`
  ${baseIconStyles}
`;
