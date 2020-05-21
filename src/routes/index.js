import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { Home } from '../app';
import { SongsList } from '../app/songs/index';
import { themeConfigs } from '../styles/theme';

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
