'use client'
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${posX}px`;
                cursorDotRef.current.style.top = `${posY}px`;
            }

            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });
            }
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', moveCursor);
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.querySelectorAll('a, button').forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorDotRef} className={`cursor-dot ${isHovering ? ' cursor-dot-hover' : ''}`}></div>
            <div ref={cursorOutlineRef} className={`cursor-outline ${isHovering ? ' cursor-outline-hover' : ''}`}></div>
        </>
    );
}