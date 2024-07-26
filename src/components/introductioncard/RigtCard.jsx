import React, { useRef } from 'react';
import { styled } from '@mui/material/styles';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import MyPhoto from '../../assets/images/MyPhoto.jpg';

gsap.registerPlugin(CSSPlugin, MotionPathPlugin);

const StyledDiv = styled('div')(() => ({
  overflow: 'hidden',
  width: '450px',
  height: '450px',
  opacity: '0.7',
  borderRadius: '45%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  position: 'relative',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  perspective: '1000px',
  transformStyle: 'preserve-3d',
  background:
    'linear-gradient(135deg, rgba(224, 247, 250, 0.5), rgba(128, 222, 234, 0.5))',
  transition: 'background 0.6s ease, box-shadow 0.6s ease',
  zIndex: 1,
  position: 'relative',
  bottom: 30,
  '@media (max-width: 990px)': {
    width: '100%',
    maxWidth: '300px',
    height: '400px'
  },
  '@media (max-width: 766px)': {
    width: '100%',
    maxWidth: '350px',
    height: '350px'
  },
  '@media (max-width: 600px)': {
    width: '100%',
    maxWidth: '300px',
    height: '300px'
  },
  '@media (max-width: 420px)': {
    width: '100%',
    maxWidth: '200px',
    height: '200px',
    margin: '0 20px'
  },
}));

const BackgroundOverlay = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.4))',
  transition: 'opacity 0.6s ease',
  pointerEvents: 'none',
  zIndex: 2,
}));

const AnimatedBackground = styled('div')(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background:
    'radial-gradient(circle, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3))',
  zIndex: 0,
  transition: 'opacity 0.6s ease',
  mixBlendMode: 'multiply',
}));

const RigtCard = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const backgroundRef = useRef(null);

  React.useEffect(() => {
    const imgElement = imgRef.current;
    const containerElement = containerRef.current;
    const overlayElement = overlayRef.current;
    const backgroundElement = backgroundRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        containerElement.getBoundingClientRect();

      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      const rotationX = (deltaY / height) * 20;
      const rotationY = (-deltaX / width) * 20;
      const scale = 1 + Math.min((Math.abs(deltaX) / width) * 0.2, 0.3);
      const backgroundRotation = (deltaX / width) * 10;
      const colorShift = Math.min((Math.abs(deltaX) / width) * 50, 100);

      gsap.to(imgElement, {
        rotationX,
        rotationY,
        scale,
        duration: 0.8,
        ease: 'power3.out',
        boxShadow: `${deltaX / 10}px ${deltaY / 10}px 35px rgba(0, 0, 0, 0.5)`,
        filter: `brightness(${1 + (Math.abs(deltaX) / width) * 0.3}) contrast(${
          1 + (Math.abs(deltaY) / height) * 0.3
        })`,
        transformStyle: 'preserve-3d',
        zIndex: 3,
      });

      gsap.to(containerElement, {
        background: `linear-gradient(${backgroundRotation}deg, rgba(${colorShift}, 200, 255, 0.7), rgba(0, 0, 0, 0.4))`,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.to(overlayElement, {
        opacity: Math.min(0.5 + (Math.abs(deltaX) / width) * 0.5, 1),
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.to(backgroundElement, {
        backgroundPosition: `${-deltaX / 30}px ${-deltaY / 30}px`,
        backgroundSize: `${100 + Math.abs(deltaX) / 5}% ${
          100 + Math.abs(deltaY) / 5
        }%`,
        duration: 0.8,
        ease: 'power3.out',
        rotation: `${backgroundRotation}deg`,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imgElement, {
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        filter: 'brightness(1) contrast(1)',
        zIndex: 3,
      });

      gsap.to(containerElement, {
        background:
          'linear-gradient(135deg, rgba(224, 247, 250, 0.5), rgba(128, 222, 234, 0.5))',
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.to(overlayElement, {
        opacity: 0.3,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.to(backgroundElement, {
        backgroundPosition: '0 0',
        backgroundSize: '100% 100%',
        rotation: '0deg',
        duration: 0.8,
        ease: 'power3.out',
      });
    };

    containerElement.addEventListener('mousemove', handleMouseMove);
    containerElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      containerElement.removeEventListener('mousemove', handleMouseMove);
      containerElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <StyledDiv ref={containerRef}>
      <AnimatedBackground ref={backgroundRef} />
      <BackgroundOverlay ref={overlayRef} />
      <img
        ref={imgRef}
        src={MyPhoto}
        alt="Анимированное изображение"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </StyledDiv>
  );
};

export default RigtCard;
