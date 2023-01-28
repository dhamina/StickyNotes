export const Direction = {
    Top: 'top',
    TopLeft: 'topLeft',
    TopRight: 'topRight',
    Right: 'right',
    Bottom: 'bottom',
    BottomLeft: 'bottomLeft',
    BottomRight: 'bottomRight',
    Left: 'left',
  };

  export const resizeTop = (panel,height,movementY,y) => {
    panel.style.height = `${height - movementY}px`;
    panel.style.top = `${y + movementY}px`;
  };

  export const resizeRight = (panel,width,movementX) => {
    panel.style.width = `${width + movementX}px`;
  };

  export const resizeBottom = (panel,height,movementY) => {
    panel.style.height = `${height + movementY}px`;
  };

  export const resizeLeft = (panel,width,movementX,x) => {
    panel.style.width = `${width - movementX}px`;
    panel.style.left = `${x + movementX}px`;
  };

  export const setDimensions=(direction,panel,width,height,x,y,movementX,movementY)=>{
    switch (direction) {
        case Direction.TopLeft:
          resizeTop(panel,height,movementY,y);
          resizeLeft(panel,width,movementX,x);
          break;
  
        case Direction.Top:
          resizeTop(panel,height,movementY,y);
          break;
  
        case Direction.TopRight:
          resizeTop(panel,height,movementY,y);
          resizeRight(panel,width,movementX);
          break;
  
        case Direction.Right:
          resizeRight(panel,width,movementX);
          break;
  
        case Direction.BottomRight:
          resizeBottom(panel,height,movementY);
          resizeRight(panel,width,movementX);
          break;
  
        case Direction.Bottom:
          resizeBottom(panel,height,movementY);
          break;
  
        case Direction.BottomLeft:
          resizeBottom(panel,height,movementY);
          resizeLeft(panel,width,movementX,x);
          break;
  
        case Direction.Left:
          resizeLeft(panel,width,movementX,x);
          break;
  
        default:
          break;
      }
  }