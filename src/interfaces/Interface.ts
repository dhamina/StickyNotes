export type HeaderProps = {
  onClose: Function;
  onDrag: Function;
  onColorChange:Function;
  onAddNote:Function;
  onUpload:Function;
};

export type StickyNoteProps = {
  onClose: Function;
  onTextChange: Function;
  note: { id: number; desc: string };
  onAddNote:Function;
  index:number;
  onUpload:Function;
};
export type ResizerProps = {
  onResize: Function;
};
