import React, { useEffect, useRef } from 'react';
import AboutRigth from '../../../assets/icons/svgs/aboutvideo.mp4'
import { RightBox } from './styleWhoIAm'

const Right = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, []);
  return (
    <RightBox>
        <video src={AboutRigth} loop autoPlay muted />
    </RightBox>
  )
}

export default Right