'use client'
import React, { useRef, useState } from 'react';
import { useDrag } from '@use-gesture/react'
import { animated } from '@react-spring/web'

const DraggableCard = ({ skill, containerRef, initialX, initialY }: {
  skill: {
    name: string;
    color: string;
    category: string;
  };
  containerRef: React.RefObject<HTMLDivElement>;
  initialX: number;
  initialY: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragged, setIsDragged] = useState(false);

  const bind = useDrag(({ offset: [x, y], event, first, last }) => {
    if (containerRef.current && cardRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const card = cardRef.current.getBoundingClientRect();

      const maxX = container.width - card.width;
      const maxY = container.height - card.height;

      const newX = Math.min(Math.max(0, x), maxX)
      const newY = Math.min(Math.max(0, y), maxY)

      setPosition({ x: newX, y: newY });

      if (first) {
        setIsDragged(true);
      }
    }
  }, {
    from: () => [position.x, position.y],
  });

  const handleClick = () => {
    if (!isDragged) {
      setPosition({ x: initialX, y: initialY });
    }
    setIsDragged(false);
  };

  return (
    <animated.div
      ref={cardRef}
      {...bind()}
      onClick={handleClick}
      style={{
        position: 'absolute',
        touchAction: 'none',
        background: skill.color,
        borderRadius: '8px',
        padding: '10px',
        cursor: 'grab',
        color: "white",
        width: "80px",
        height: "40px",
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {skill.name}
    </animated.div>
  );
};

export const FloatingCards = ({ skills }: {
  skills: {
    name: string;
    color: string;
    category: string;
  }[]
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const categories = Array.from(new Set(skills.map(skill => skill.category)));
  const skillsByCategory = skills.reduce((acc: { [key: string]: any[] }, skill) => {
    const category = skill.category;
    acc[category] = acc[category] || [];
    acc[category].push(skill);
    return acc;
  }, {});

  const getNumberingOfCategory = (skill: { name: string; color: string; category: string; }) => {
    const index = categories.findIndex(c => c === skill.category);
    return index;
  };

  const getSkillHeight = (skill: { name: string; color: string; category: string; }) => {
    return getNumberingOfCategory(skill) * 100 + 25
  };

  const getSkillWidth = (skill: { name: string; color: string; category: string; }) => {
    const categoryIndex = categories.indexOf(skill.category);
    const skillsInCategory = skillsByCategory[skill.category];
    const skillIndex = skillsInCategory.findIndex(s => s.name === skill.name);
    return (skillIndex % 5) * 100 + 10; // Assuming each card is about 100px wide with 20px gap
  };

  return (
    <div className="relative w-full h-full flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-4">
          {categories.map((category, index) =>
            <div key={index} className="w-full text-primary text-xl h-full relative flex items-center">
              {category}
            </div>
          )}
        </div>
        <div ref={containerRef} className="h-[500px] flex flex-wrap gap-4 w-full border-solid border-8 border-gray-300 relative">
          {skills.map((skill, index) => (
            <DraggableCard
              key={index}
              skill={skill}
              containerRef={containerRef}
              initialX={getSkillWidth(skill)}
              initialY={getSkillHeight(skill)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
