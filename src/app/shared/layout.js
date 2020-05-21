import React from 'react';
import styled from 'styled-components';

import { Sidebar } from './sidebar';

const Div = styled.div`
  .nm-main-offset {
    width: calc(100% - 300px);
    float: right;
  }
`;

export const Layout = (props) => {
  const { children } = props;
  return (
    <Div>
      <Sidebar />
      <main className='flex-grow-1 nm-main-offset p-1'>{children}</main>
    </Div>
  );
};
