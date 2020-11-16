import React from 'react';
import { animated } from 'react-spring';

import useBoop from '../../hooks/boop/use-boop';

function Button() {
  const [style, trigger] = useBoop({ x: 2, y: 2, rotation: 2 });

  return (
    // <div onMouseEnter={trigger}>
    //     show more
        <animated.span style={style} onMouseEnter={trigger}>
            &gt;
        </animated.span>
    // </div>
  );
}

export default Button;