/* eslint-disable */

import React from 'react';
import Resizable from '../../src';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

export default () => (
  <Resizable
    style={style}
    defaultSize={{
      width: 200,
      height: 200,
    }}
    snap={{
      x: [10, 20, 50, 100, 300],
      y: [10, 20, 50, 100, 300],
    }}
  >
    [10, 20, 50, 100, 300]
  </Resizable>
);
