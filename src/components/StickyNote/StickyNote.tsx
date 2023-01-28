import React, { useRef } from "react";
import { setDimensions } from "../../utils";
import Header from "../Header/Header";
import { StickyNoteProps } from "../../interfaces/Interface";
import "./style.css";
import { Resizer } from "../Resizer/Resizer";

export const StickyNote = ({ onClose }: StickyNoteProps) =>{
  const panelRef = useRef<HTMLInputElement>(null);

  const handleDrag = (movementX: number, movementY: number) => {
    const panel = panelRef?.current;
    
    if (!panel) return;
  
  
    const { x, y,right,bottom} =  panel.getBoundingClientRect();
    const left = x + movementX
    const top= y + movementY
    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;

    const binElement = document.getElementById('bin')
    const binDimensions = binElement?.getBoundingClientRect();
    if(right>binDimensions!.x+50 && bottom>binDimensions!.y+50){
      onClose()
    }
  };

  const handleResize = (direction: String, movementX: Number, movementY:Number) => {
    const panel = panelRef.current;
    if (!panel) return;
    const { width, height, x, y } = panel.getBoundingClientRect();
    if(width>=200 && height >= 200){
      setDimensions(direction,panel,width,height,x,y,movementX,movementY)
    }
    else{
      panel.style.width = '200px';
      panel.style.height = '200px'
    }
  };

  return (
    <div className="panel" ref={panelRef}>
      <div className="panel__container">
        <Resizer onResize={handleResize} />
        <Header onClose={onClose} onDrag={handleDrag} />
        <div className="panel__content"> <textarea className="sticky__cn__txtarea"></textarea> </div>
      </div>
    </div>
  );
};
