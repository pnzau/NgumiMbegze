import React from 'react';
import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import styled from 'styled-components';
import {
  LibraryMusicRounded,
  AlbumRounded,
  FavoriteRounded,
  PlayCircleOutlineRounded,
  PlaylistPlayRounded,
  QueueMusicRounded,
} from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

import { addToDefault } from '../utils';
import { NowPlaying } from '../songs/nowPlaying';

const drawerWidth = 300;

const Div = styled.div`
  .nm-drawer-paper {
    width: ${drawerWidth}px;
    box-shadow: ${(props) => props.theme.shadows[5]};
  }

  .nm-item-text {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

export const Sidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const items = [
    {
      Icon: LibraryMusicRounded,
      text: 'All Songs',
      route: '/songs',
    },
    {
      Icon: AlbumRounded,
      text: 'Collections',
      route: '/collection',
    },
    {
      Icon: FavoriteRounded,
      text: 'Favorite Songs',
      route: '/collection',
    },
    {
      Icon: PlayCircleOutlineRounded,
      text: 'Now Playing',
      route: '/playing',
    },
    {
      Icon: QueueMusicRounded,
      text: 'My Playlist',
      route: '/playing',
    },
  ];

  const goTo = (path) => () => history.push(path);
  const isSelected = (route) => route === pathname;

  return (
    <Div>
      <Hidden xsDown implementation='css'>
        <Drawer
          classes={{
            paper: 'nm-drawer-paper',
          }}
          variant='permanent'
          anchor='left'
        >
          <div className='d-flex flex-column h-100'>
            <div className='flex-grow-1'>
              <List>
                {items.map(({ Icon, text, route }) => (
                  <ListItem
                    button
                    key={text}
                    selected={isSelected(route)}
                    onClick={goTo(route)}
                  >
                    <ListItemIcon>
                      <Icon
                        color={isSelected(route) ? 'secondary' : 'inherit'}
                        fontSize='large'
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      className={addToDefault(
                        isSelected(route),
                        'nm-item-text',
                      )}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
            <div className='d-flex flex-column w-100'>
              <NowPlaying />
            </div>
          </div>
        </Drawer>
      </Hidden>
    </Div>
  );
};
