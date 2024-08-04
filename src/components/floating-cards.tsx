
import React, { useState } from 'react';
import { useDrag, useGesture } from '@use-gesture/react'
import { animated, useSpring, } from '@react-spring/web'

const DraggableCard = ({ skill }: { skill: string }) => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ offset: [x, y] }) => {
    set({ x, y });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        x,
        y,
        position: 'absolute',
        touchAction: 'none',
        background: 'white',
        borderRadius: '8px',
        padding: '10px',
        cursor: 'grab',
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        userSelect: 'none'
      }}
    >
      {skill}
    </animated.div>
  );
};

export const FloatingCards = ({ skills }: { skills: string[] }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {skills.map((skill, index) => (
        <DraggableCard key={index} skill={skill} />
      ))}
    </div>
  );
};
