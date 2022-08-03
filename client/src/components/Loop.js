import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'


export default function Loop() {
    const styles = useSpring({
      loop: { reverse: true },
      from: { x: 10 },
      to: { x: 500 },
    })
  
    return (
      <animated.div
        style={{
          width: 600,
          height: 6,
          backgroundColor: '#1f1c7a',
          borderRadius: 16,
          ...styles,
        }}
      /> 
    )
  }