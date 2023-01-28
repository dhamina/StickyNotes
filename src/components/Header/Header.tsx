import React, { useState, useEffect } from "react";
import { HeaderProps } from "../../interfaces/Interface";
import "./style.css";

export const Header = ({ onDrag, onClose }: HeaderProps) => {
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => setMouseDown(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.addEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const ratio = window.devicePixelRatio;

    const handleMouseMove = (e: any) =>
      onDrag(e.movementX / ratio, e.movementY / ratio);

    if (mouseDown) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseDown, onDrag]);

  const handleMouseDown = () => setMouseDown(true);

  return (
    <div className="panel__header" onMouseDown={handleMouseDown}>
      <div>Sticky Note</div>
      <div className="close" onClick={() => onClose()}>
        &times;
      </div>
    </div>
  );
};

export default Header;
