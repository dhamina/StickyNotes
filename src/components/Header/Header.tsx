import React, { useState, useEffect } from "react";
import { HeaderProps } from "../../interfaces/Interface";
import "./style.css";

export const Header = ({
  onAddNote,
  onDrag,
  onClose,
  onColorChange,
  onUpload,
}: HeaderProps) => {
  const [mouseDown, setMouseDown] = useState(false);
  const colorPanel = ["yellow", "green", "pink", "purple", "blue"];

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
      <div className="panel__clr">
        {colorPanel.map((r, index) => {
          return (
            <div
              onClick={() => onColorChange(r)}
              key={index}
              className={`panel__clr__cn ${r}`}
            >
              {" "}
            </div>
          );
        })}
      </div>

      <div className="panel__tle">
        <div
          title="Add new sticky note"
          className="close"
          onClick={() => onAddNote()}
        >
          +
        </div>
        <img
          title="Upload to cloud"
          className="close"
          alt="upload"
          src="https://ik.imagekit.io/bojqexpon/Upload.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675014937083"
          onClick={() => onUpload()}
        />
        <div title="Close" className="close" onClick={() => onClose()}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Header;
