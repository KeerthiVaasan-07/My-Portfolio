import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const ringSpringConfig = { damping: 18, stiffness: 180 };
  const ringX = useSpring(mouseX, ringSpringConfig);
  const ringY = useSpring(mouseY, ringSpringConfig);

  useEffect(() => {
    // Only show on devices with fine pointer (mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);
    document.documentElement.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.hasAttribute('data-cursor-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer dynamic ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyber-accent/60 flex items-center justify-center transition-opacity duration-300"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : isClicked ? 28 : 34,
          height: isHovered ? 48 : isClicked ? 28 : 34,
          borderColor: isHovered ? '#A78BFA' : 'rgba(213, 213, 213, 0.4)',
          backgroundColor: isHovered ? 'rgba(167, 139, 250, 0.08)' : 'transparent',
        }}
      >
        {isHovered && (
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-ping" />
        )}
      </motion.div>

      {/* Center sharp dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[#F2F0EB]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isClicked ? 8 : 4,
          height: isClicked ? 8 : 4,
          backgroundColor: isHovered ? '#A78BFA' : '#F2F0EB',
        }}
      />
    </div>
  );
};
