import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export const EnhancedEpicTextAnimation = ({ text }) => {
  return (
    <span>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
            scale: 0.5,
            rotateX: 360,
            rotateY: 360,
            rotateZ: 360,
            x: -1000,
            y: -1000,
            z: -1000,
            filter: 'brightness(0) blur(20px)',
          }}
          animate={{
            opacity: 1,
            scale: [0.5, 1.5, 1],
            rotateX: [360, 0],
            rotateY: [360, 0],
            rotateZ: [360, 0],
            x: [0, 50, 0],
            y: [0, -100, 0],
            z: [0, 200, 0],
            filter: ['brightness(0)', 'brightness(1.5) blur(0px)'],
          }}
          transition={{
            delay: index * 0.1,
            duration: 1,
            type: 'tween',
            ease: 'easeInOut',
          }}
          style={{
            display: 'inline-block',
            transformOrigin: 'center',
            fontWeight: 'bold',
            letterSpacing: '2.8px',
            color: '#fff',
            willChange: 'transform, opacity, filter, color, text-shadow',
            transform:
              'perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
          }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

EnhancedEpicTextAnimation.propTypes = {
  text: PropTypes.string.isRequired,
};
