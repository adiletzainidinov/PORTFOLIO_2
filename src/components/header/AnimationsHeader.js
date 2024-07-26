import { keyframes } from "@emotion/react";

export const verticalElasticAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const backgroundFadeIn = keyframes`
  0% {
    background-color: none;
  }
  100% {
    background-color: rgba(24, 23, 39, 0.4);
  }
`;

export const continuousTwistRotation = keyframes`
  0% {
    transform: perspective(1000px) rotateY(0deg) rotateZ(0deg);
  }
  50% {
    transform: perspective(1000px) rotateY(180deg) rotateZ(10deg);
  }
  100% {
    transform: perspective(1000px) rotateY(360deg) rotateZ(0deg);
  }
`;

export const pulseColorEffect = keyframes`
  0% {
    transform: scale(1);
    color: #333;
  }
  50% {
    transform: scale(1.1);
    color: #ff6f61;
  }
  100% {
    transform: scale(1);
    color: #333;
  }
`;

export const hoverBounceSpin = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

export const advanced3DRotation = keyframes`
  0% {
    transform: perspective(1500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  25% {
    transform: perspective(1500px) rotateX(60deg) rotateY(60deg) rotateZ(30deg);
  }
  50% {
    transform: perspective(1500px) rotateX(120deg) rotateY(120deg) rotateZ(60deg);
  }
  75% {
    transform: perspective(1500px) rotateX(180deg) rotateY(180deg) rotateZ(90deg);
  }
  100% {
    transform: perspective(1500px) rotateX(240deg) rotateY(240deg) rotateZ(120deg);
  }
`;

export const neonGlowFlicker = keyframes`
  0% {
    text-shadow: 0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 45px #ff00ff, 0 0 60px #ff00ff, 0 0 75px #ff00ff, 0 0 90px #ff00ff, 0 0 105px #ff00ff;
  }
  20% {
    text-shadow: 0 0 20px #ff00ff, 0 0 35px #ff00ff, 0 0 50px #ff00ff, 0 0 65px #ff00ff, 0 0 80px #ff00ff, 0 0 95px #ff00ff, 0 0 110px #ff00ff;
  }
  40% {
    text-shadow: 0 0 25px #ff00ff, 0 0 40px #ff00ff, 0 0 55px #ff00ff, 0 0 70px #ff00ff, 0 0 85px #ff00ff, 0 0 100px #ff00ff, 0 0 115px #ff00ff;
  }
  60% {
    text-shadow: 0 0 30px #ff00ff, 0 0 45px #ff00ff, 0 0 60px #ff00ff, 0 0 75px #ff00ff, 0 0 90px #ff00ff, 0 0 105px #ff00ff, 0 0 120px #ff00ff;
  }
  80% {
    text-shadow: 0 0 20px #ff00ff, 0 0 35px #ff00ff, 0 0 50px #ff00ff, 0 0 65px #ff00ff, 0 0 80px #ff00ff, 0 0 95px #ff00ff, 0 0 110px #ff00ff;
  }
  100% {
    text-shadow: 0 0 15px #ff00ff, 0 0 30px #ff00ff, 0 0 45px #ff00ff, 0 0 60px #ff00ff, 0 0 75px #ff00ff, 0 0 90px #ff00ff, 0 0 105px #ff00ff;
  }
`;

export const gradientColorTransition = keyframes`
  0% {
    color: #ce5ff8;
  }
  20% {
    color: #ff6f61;
  }
  40% {
    color: #ffcc00;
  }
  60% {
    color: #4caf50;
  }
  80% {
    color: #00bcd4;
  }
  100% {
    color: #ce5ff8;
  }
`;

export const pulsingEffectWithShadow = keyframes`
  0% {
    transform: scale(1);
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.7);
  }
  50% {
    transform: scale(1.1);
    text-shadow: 0 0 20px rgba(255, 0, 255, 0.9);
  }
  100% {
    transform: scale(1);
    text-shadow: 0 0 10px rgba(255, 0, 255, 0.7);
  }
`;

export const hover3DRotation = keyframes`
  0% {
    transform: perspective(1500px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  25% {
    transform: perspective(1500px) rotateX(20deg) rotateY(20deg) rotateZ(10deg);
  }
  50% {
    transform: perspective(1500px) rotateX(40deg) rotateY(40deg) rotateZ(20deg);
  }
  75% {
    transform: perspective(1500px) rotateX(60deg) rotateY(60deg) rotateZ(30deg);
  }
  100% {
    transform: perspective(1500px) rotateX(80deg) rotateY(80deg) rotateZ(40deg);
  }
`;

export const shimmeringColor = keyframes`
  0% {
    color: #ff00ff;
  }
  50% {
    color: #ffffff;
  }
  100% {
    color: #ff00ff;
  }
`;

export const glowingBorder = keyframes`
  0% {
    box-shadow: 0 0 10px #ff00ff;
  }
  50% {
    box-shadow: 0 0 25px #ff00ff;
  }
  100% {
    box-shadow: 0 0 10px #ff00ff;
  }
`;

export const shadowShift = keyframes`
  0% {
    text-shadow: 0 0 20px rgba(255, 0, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.7);
    transform: translateZ(0);
  }
  25% {
    text-shadow: 0 0 30px rgba(255, 0, 255, 0.9), 0 0 45px rgba(255, 0, 255, 0.9);
    transform: translateZ(10px);
  }
  50% {
    text-shadow: 0 0 40px rgba(255, 0, 255, 1), 0 0 60px rgba(255, 0, 255, 1);
    transform: translateZ(20px);
  }
  75% {
    text-shadow: 0 0 30px rgba(255, 0, 255, 0.9), 0 0 45px rgba(255, 0, 255, 0.9);
    transform: translateZ(10px);
  }
  100% {
    text-shadow: 0 0 20px rgba(255, 0, 255, 0.7), 0 0 30px rgba(255, 0, 255, 0.7);
    transform: translateZ(0);
  }
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const shake = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px);
  }
  75% {
    transform: translateY(5px);
  }
`;

export const wobble = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  15% {
    transform: rotate(-5deg);
  }
  30% {
    transform: rotate(5deg);
  }
  45% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
`;

export const flipAndPulse1 = keyframes`
  0% {
    transform: perspective(400px) rotateY(0deg);
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.2);
  }
  25% {
    transform: perspective(400px) rotateY(90deg);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: perspective(400px) rotateY(180deg);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  75% {
    transform: perspective(400px) rotateY(270deg);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: perspective(400px) rotateY(360deg);
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.2);
  }
`;

export const shadowPulse = keyframes`
  0% {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 0px rgba(0, 0, 0, 0.2);
  }
`;

export const zoom = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const rotate3D = keyframes`
  0% {
    transform: perspective(600px) rotateY(0deg) scale(1);
  }
  50% {
    transform: perspective(600px) rotateY(180deg) scale(1.2);
  }
  100% {
    transform: perspective(600px) rotateY(0deg) scale(1);
  }
`;

export const gradientGlow = keyframes`
  0% {
    color: #000;
    background: linear-gradient(45deg, #fff, #ccc);
  }
  50% {
    color: #fff;
    background: linear-gradient(45deg, #ff0, #f0f);
  }
  100% {
    color: #000;
    background: linear-gradient(45deg, #fff, #ccc);
  }
`;

export const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7);
  }
  100% {
    box-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
  }
`;
