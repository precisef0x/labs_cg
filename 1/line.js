(() => {

  const canvas = document.querySelector('.page__canvas');
  const context = canvas.getContext('2d');

  let repaintLines = [];
  let repaintIndex = 0;

  let leftMousePressed = false;
  let x, y;

  canvas.onmousedown = (event) => {
    x = event.offsetX;
    y = event.offsetY;
    leftMousePressed = true;
  };

  canvas.onmouseup = (event) => {
    x1 = event.offsetX;
    y1 = event.offsetY;
    Line(x, y, x1, y1, context);
    repaintLines[repaintIndex++] = {
      x_1: x,
      y_1: y,
      x_2: x1,
      y_2: y1
    };
    leftMousePressed = false;
  };

  canvas.onmousemove = (event) => {
    x1 = event.offsetX;
    y1 = event.offsetY;
    if(leftMousePressed) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      Line(x, y, x1, y1, context);
      for(let i in repaintLines) {
        Line(repaintLines[i].x_1, repaintLines[i].y_1, repaintLines[i].x_2, repaintLines[i].y_2, context);
      }
    }
  };

})();
