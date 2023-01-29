import React, { useState, useEffect } from 'react';
import { ResizerProps } from '../../interfaces/Interface';
import { Dimensions } from '../../utils';


import './style.css'

export const Resizer = ({  onResize }: ResizerProps) =>{

  const [direction, setDirection] = useState('');
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      if (!direction) return;
      const ratio = window.devicePixelRatio
      onResize(direction, e.movementX / ratio, e.movementY / ratio);
    };

    if (mouseDown) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseDown, direction, onResize]);

  useEffect(() => {
    const handleMouseUp = () => {setMouseDown(false)};

    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = (direction:string) => () => {
    setDirection(direction);
    setMouseDown(true);
  };

  return (
    <>
      {
        Dimensions.map((item:any)=><div className={item.class} onMouseDown={handleMouseDown(item.id)}></div> )
      }
    </>
  );
};

