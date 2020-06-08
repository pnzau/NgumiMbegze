import styled, { css } from 'styled-components';

import { ReactComponent as AlbumIcon } from './album.svg';
import { ReactComponent as FireIcon } from './fire.svg';
import { ReactComponent as PlaylistIcon } from './music-and-multimedia.svg';
import { ReactComponent as HeadphonesIcon } from './headphones.svg';
import { ReactComponent as MusicNoteIcon } from './musical-note.svg';
import { ReactComponent as RecordIcon } from './record.svg';
import { ReactComponent as PlayIcon } from './play.svg';
import { ReactComponent as AddToPlaylistIcon } from './add.svg';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as HeartIcon } from './heart.svg';
import { ReactComponent as MenuIcon } from './menu.svg';
import { ReactComponent as UpArrowIcon } from './arrow.svg';
import { ReactComponent as DownArrowIcon } from './down.svg';
import { ReactComponent as NextIcon } from './next.svg';
import { ReactComponent as PreviousIcon } from './previous.svg';
import { ReactComponent as PauseIcon } from './pause.svg';

const baseIconStyles = css`
  font-size: ${(props) => {
    switch (props.size) {
      case 'lg':
        return '2.5rem';
      case 'md':
        return '2rem';
      case 'sm':
        return '0.8rem';
      default:
        return '1.2rem';
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
`;

export const Album = styled(AlbumIcon)`
  ${baseIconStyles}
`;

export const Fire = styled(FireIcon)`
  ${baseIconStyles}
`;

export const Playlist = styled(PlaylistIcon)`
  ${baseIconStyles}
`;

export const Headphone = styled(HeadphonesIcon)`
  ${baseIconStyles}
`;

export const MusicNote = styled(MusicNoteIcon)`
  ${baseIconStyles}
`;

export const Record = styled(RecordIcon)`
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

export const AddToPlaylist = styled(AddToPlaylistIcon)`
  ${baseIconStyles}
`;

export const Search = styled(SearchIcon)`
  ${baseIconStyles}
`;

export const Heart = styled(HeartIcon)`
  ${baseIconStyles}
`;

export const Menu = styled(MenuIcon)`
  ${baseIconStyles}
`;

export const UpArrow = styled(UpArrowIcon)`
  ${baseIconStyles}
`;

export const DownArrow = styled(DownArrowIcon)`
  ${baseIconStyles}
`;

export const Next = styled(NextIcon)`
  ${baseIconStyles}
`;

export const Previous = styled(PreviousIcon)`
  ${baseIconStyles}
`;

export const Pause = styled(PauseIcon)`
  ${baseIconStyles}
`;
