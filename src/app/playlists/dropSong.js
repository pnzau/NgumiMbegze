import React from 'react';
import styled from 'styled-components';
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@material-ui/core';
import { useDrag } from 'react-use-gesture';
import { useSprings, interpolate } from 'react-spring';
import { clamp } from 'lodash';
import swap from 'lodash-move';

import { DraggableSong } from './draggableSong';
import { SongContext } from '../../context/songContext';

const Div = styled.div`
  .nm-table {
    border-collapse: separate;
    border-spacing: 0px 5px;
  }

  .nm-table-cell-body {
    border: none;
  }
`;

const fn = (order, down, originalIndex, curIndex, y) => (index) =>
  down && index === originalIndex
    ? {
        y: curIndex * 100 + y,
        scale: 1.1,
        zIndex: '1',
        shadow: 15,
        immediate: (n) => n === 'y' || n === 'zIndex',
      }
    : {
        y: order.indexOf(index) * 100,
        scale: 1,
        zIndex: '0',
        shadow: 1,
        immediate: false,
      };

function DraggableList({ items }) {
  const order = React.useRef(items.map((_, index) => index));
  const [springs, setSprings] = useSprings(items.length, fn(order.current));
  const bind = useDrag(({ args: [originalIndex], down, delta: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1,
    );
    const newOrder = swap(order.current, curIndex, curRow);
    setSprings(fn(newOrder, down, originalIndex, curIndex, y));
    if (!down) order.current = newOrder;
  });
  console.log('order gat', bind);
  return (
    <TableBody>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <DraggableSong
          style={{
            zIndex,
            boxShadow: shadow.interpolate(
              (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`,
            ),
            transform: interpolate(
              [y, scale],
              (y, s) => `translate3d(0,${y}px,0) scale(${s})`,
            ),
          }}
          {...bind(i)}
          key={i}
          d={items[i]}
        />
      ))}
    </TableBody>
  );
}

export const DropSongArea = () => {
  const [state] = React.useContext(SongContext);

  const titles = ['#', 'Song', 'Artist', 'Time', ''];

  return (
    <Div className=''>
      <Paper elevation={0} className='w-100'>
        <TableContainer>
          <Table
            classes={{
              root: 'nm-table',
            }}
          >
            <TableHead>
              <TableRow>
                {titles.map((title) => (
                  <TableCell key={title}>{title}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <DraggableList items={state.songs} />
          </Table>
        </TableContainer>
      </Paper>
    </Div>
  );
};
