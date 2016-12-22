(() => {

  const canvas = document.querySelector('.page__canvas');
	const context = canvas.getContext('2d');
 	let xx1,yy1,xx,yy,radius;

  let leftMousePressed = false;
  let repaintCircles = [];
  let repaintIndex = 0;

	canvas.onmousedown = (event) => {
    leftMousePressed = true;
		xx1 = event.offsetX;
		yy1 = event.offsetY;
	};

	canvas.onmouseup = (event) => {
    leftMousePressed = false;
		let x2 = event.offsetX;
		let y2 = event.offsetY;
		xx = (Math.abs(x2 - xx1))/2;
		yy = (Math.abs(y2 - yy1))/2;
		radius = Math.sqrt(Math.pow(xx,2) + Math.pow(yy,2));
		if (x2 > xx1) {
			xx += xx1;
		} else {
			xx += x2;
		}
		if (y2 > yy1) {
			yy += yy1;
		} else {
			yy += y2;
		}
    repaintCircles[repaintIndex++] = {
      posX : xx,
      posY: yy,
      rad: radius
    };
		Circle(xx, yy, radius, context);
	};

  canvas.onmousemove = () => {
    let x2 = event.offsetX;
		let y2 = event.offsetY;
		xx = (Math.abs(x2 - xx1))/2;
		yy = (Math.abs(y2 - yy1))/2;
		radius = Math.sqrt(Math.pow(xx,2) + Math.pow(yy,2));
		if (x2 > xx1) {
			xx += xx1;
		} else {
			xx += x2;
		}
		if (y2 > yy1) {
			yy += yy1;
		} else {
			yy += y2;
		}
    if(leftMousePressed) {
      context.clearRect(0,0,canvas.width, canvas.height);
      Circle(xx, yy, radius, context);
      for(let i in repaintCircles) {
        Circle(repaintCircles[i].posX, repaintCircles[i].posY, repaintCircles[i].rad, context);
      }
    }
  };

})();
