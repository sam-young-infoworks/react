// components/Boop.jsx
import React from 'react';
import { animated } from 'react-spring';
// import styled from 'styled-components';

import useBoop from '../../hooks/boop/use-boop';

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    // <button onMouseEnter={trigger}>
    //   what the heck
      <animated.button onMouseEnter={trigger} style={style}>
        {children}
      </animated.button>
    // </button>
  );
};

export default Boop;