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
import { useHistory, useLocation } from 'react-router-dom';

import { Album, Headphone, Playlist, MusicNote, Record } from '../../icons';
import { addToDefault } from '../utils';
import { NowPlaying } from '../songs/nowPlaying';

const drawerWidth = 300;

const Div = styled.div`
  .nm-drawer-paper {
    width: ${drawerWidth}px;
    box-shadow: ${(props) => props.theme.shadows[5]};
  }

  .nm-item-text {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const Sidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const goTo = (path) => () => history.push(path);
  const isSelected = (route) => pathname.includes(route);

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
                <ListItem
                  button
                  selected={isSelected('/songs')}
                  onClick={goTo('/songs')}
                >
                  <ListItemIcon>
                    <MusicNote
                      size='lg'
                      color={isSelected('/songs') ? 'primary' : 'inherit'}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Songs'}
                    className={addToDefault(
                      isSelected('/songs'),
                      'nm-item-text',
                    )}
                  />
                </ListItem>
                <ListItem
                  button
                  selected={isSelected('/albums')}
                  onClick={goTo('/albums')}
                >
                  <ListItemIcon>
                    <Record
                      size='lg'
                      color={isSelected('/albums') ? 'primary' : 'inherit'}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Albums'}
                    className={addToDefault(
                      isSelected('/albums'),
                      'nm-item-text',
                    )}
                  />
                </ListItem>
                <ListItem
                  button
                  selected={isSelected('/playlists')}
                  onClick={goTo('/playlists')}
                >
                  <ListItemIcon>
                    <Playlist
                      size='lg'
                      color={isSelected('/playlists') ? 'primary' : 'inherit'}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Playlists'}
                    className={addToDefault(
                      isSelected('/playlists'),
                      'nm-item-text',
                    )}
                  />
                </ListItem>
                <ListItem
                  button
                  selected={isSelected('/now-playing')}
                  onClick={goTo('/now-playing')}
                >
                  <ListItemIcon>
                    <Headphone
                      size='lg'
                      color={isSelected('/now-playing') ? 'primary' : 'inherit'}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Now Playing'}
                    className={addToDefault(
                      isSelected('/now-playing'),
                      'nm-item-text',
                    )}
                  />
                </ListItem>
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
