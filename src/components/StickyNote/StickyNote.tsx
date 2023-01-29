import React, {  useRef, useState } from "react";
import { setDimensions } from "../../utils";
import Header from "../Header/Header";
import { StickyNoteProps } from "../../interfaces/Interface";
import "./style.css";
import { Resizer } from "../Resizer/Resizer";

export const StickyNote = ({ onAddNote,note,index, onClose, onTextChange,onUpload }: StickyNoteProps) =>{
  const panelRef = useRef<HTMLInputElement>(null);
  const [textColor,setTextColor] = useState<string>('yellow');

  // Drag the notes handler
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

  // Resize handler for the notes
  const handleResize = (direction: string, movementX: number, movementY:number) => {
    const panel = panelRef.current;
    if (!panel) return;
    const { width, height, x, y } = panel.getBoundingClientRect();
    if(width>=250 && height >= 300){
      setDimensions(direction,panel,width,height,x,y,movementX,movementY)
    }
    else{
      panel.style.width = '250px';
      panel.style.height = '300px'
    }
  };

  const onColorChange = (color:string)=>{
  setTextColor(color)
  }
  const onDescriptionChange = (e:any) =>{
    onTextChange(e,note.id)
  }
 
  return (
    <div style={{top: 16*index+'px',left:16*index+'px'}} className={`panel ${note.id}`} ref={panelRef}>
      <div className={`panel__container ${textColor}`}>
        <Resizer onResize={handleResize} />
        <Header onUpload={onUpload} onAddNote={onAddNote} onColorChange={onColorChange} onClose={onClose} onDrag={handleDrag} />
        <div className="panel__content"> <textarea aria-label="Description" value={note.desc} onChange={onDescriptionChange} className={`sticky__cn__txtarea ${textColor}`}></textarea> </div>
      </div>
    </div>
  );
};
