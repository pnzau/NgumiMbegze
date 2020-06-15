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

import { Headphone, Playlist, Music, Album, Artists } from '../../icons';
import { addToDefault } from '../utils';

const drawerWidth = 300;

const Div = styled.div`
  .nm-item-text {
    color: ${(props) => props.theme.palette.primary.main};
  }

  ${(props) => props.theme.breakpoints.up('sm')} {
    .nm-drawer-paper {
      width: ${drawerWidth}px;
    }
  }
`;

export const Sidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const goTo = (path) => () => history.push(path);
  const isSelected = (route) => pathname.includes(route);

  return (
    <Div>
      <Hidden smDown implementation='css'>
        <Drawer
          classes={{
            paper: 'nm-drawer-paper',
          }}
          variant='permanent'
          anchor='left'
          elevation={0}
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
                    <Music
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
                    <Album
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
                  selected={isSelected('/artists')}
                  onClick={goTo('/artists')}
                >
                  <ListItemIcon>
                    <Artists
                      size='lg'
                      color={isSelected('/artists') ? 'primary' : 'inherit'}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={'Artists'}
                    className={addToDefault(
                      isSelected('/artists'),
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
          </div>
        </Drawer>
      </Hidden>
    </Div>
  );
};
