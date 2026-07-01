


export interface TextStyle {
  
  font?: string;
  
  fillStyle?: string;
  
  textAlign?: CanvasTextAlign;
  
  textBaseline?: CanvasTextBaseline;
}


export interface IRenderer {
  

  
  clear(): void;

  
  present(): void;

  
  dispose(): void;

  
  drawRect(x: number, y: number, w: number, h: number, color: string): void;

  
  drawCircle(x: number, y: number, r: number, color: string): void;

  
  drawText(x: number, y: number, text: string, style?: TextStyle): void;

  
  readonly width: number;

  
  readonly height: number;
}
