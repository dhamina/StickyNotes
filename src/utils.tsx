export const Dimensions=[
  {class:'top-left', id:'topLeft'},
  {class:'top', id:'top'},
  {class:'top-right', id:'topRight'},
  {class:'right', id:'right'},
  {class:'right-bottom', id:'bottomRight'},
  {class:'bottom-left', id:'bottomLeft'},
  {class:'left', id:'left'},
  {class:'bottom', id:'bottom'},
  {}
]
  export const resizeTop = (panel: { style: { height: string; top: string; }; },height: number,movementY: number,y: any) => {
    panel.style.height = `${height - movementY}px`;
    panel.style.top = `${y + movementY}px`;
  };

  export const resizeRight = (panel: { style: { width: string; }; },width: any,movementX: any) => {
    panel.style.width = `${width + movementX}px`;
  };

  export const resizeBottom = (panel: { style: { height: string; }; },height: any,movementY: any) => {
    panel.style.height = `${height + movementY}px`;
  };

  export const resizeLeft = (panel: { style: { width: string; left: string; }; },width: number,movementX: number,x: any) => {
    panel.style.width = `${width - movementX}px`;
    panel.style.left = `${x + movementX}px`;
  };

  export const setDimensions=(direction: string,panel: HTMLInputElement,width: number,height: number,x: number,y: number,movementX: number,movementY: number)=>{
    console.log(direction)
    switch (direction) {
        case 'topLeft':
          resizeTop(panel,height,movementY,y);
          resizeLeft(panel,width,movementX,x);
          break;
  
        case 'top':
          resizeTop(panel,height,movementY,y);
          break;
  
        case 'topRight':
          resizeTop(panel,height,movementY,y);
          resizeRight(panel,width,movementX);
          break;
  
        case 'right':
          resizeRight(panel,width,movementX);
          break;
  
        case 'bottomRight':
          resizeBottom(panel,height,movementY);
          resizeRight(panel,width,movementX);
          break;
  
        case 'bottom':
          resizeBottom(panel,height,movementY);
          break;
  
        case 'bottomLeft':
          resizeBottom(panel,height,movementY);
          resizeLeft(panel,width,movementX,x);
          break;
  
        case 'left':
          resizeLeft(panel,width,movementX,x);
          break;
  
        default:
          break;
      }
  }