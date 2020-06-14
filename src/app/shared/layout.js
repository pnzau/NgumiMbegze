import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { isEqual } from 'lodash';

import { Sidebar } from './sidebar';

export const Layout = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  const Div = styled.div`
    .nm-main-offset {
      width: 100%;
      float: right;
    }

    ${(props) => props.theme.breakpoints.up('md')} {
      .nm-main-offset {
        width: ${!isEqual(pathname, '/now-playing')
          ? `calc(100% - 300px)`
          : '100%'};
        float: right;
      }
    }
  `;

  return (
    <Div>
      {!isEqual(pathname, '/now-playing') && <Sidebar />}
      <main className='flex-grow-1 nm-main-offset p-1'>{children}</main>
    </Div>
  );
};
