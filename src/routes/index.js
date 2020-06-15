import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { Home } from '../app';
import { SongsList } from '../app/songs/index';
import { themeConfigs } from '../styles/theme';
import { Albums } from '../app/albums';
import { ViewAlbum } from '../app/albums/albumView';
import { NowPlaying } from '../app/songs/nowPlaying';
import { ArtistList } from '../app/artists/artistList';
import { ArtistView } from '../app/artists/artistView';
import { Playlists } from '../app/playlists';
import { PlaylistView } from '../app/playlists/playlistView';

export const RouteManager = () => {
  const theme = themeConfigs();
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path='/songs'>
                <SongsList />
              </Route>
              <Route exact path='/albums'>
                <Albums />
              </Route>
              <Route path='/albums/:albumId'>
                <ViewAlbum />
              </Route>
              <Route path='/now-playing'>
                <NowPlaying />
              </Route>
              <Route exact path='/artists'>
                <ArtistList />
              </Route>
              <Route path='/artists/:artistId'>
                <ArtistView />
              </Route>
              <Route exact path='/playlists'>
                <Playlists />
              </Route>
              <Route exact path='/playlists/:playlistId'>
                <PlaylistView />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};
