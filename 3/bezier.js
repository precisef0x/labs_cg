(() => {

  const canvas = document.getElementById('Lab3');
	const ctx = canvas.getContext('2d');

  let isPainted = false;
  let repaintLines = [];
  let repaintIndex = 0;

	function blockMenu() {
    		document.getElementById("Lab3").innerHTML = "Blocked";
	}

	document.oncontextmenu = function()  { blockMenu(); return false; };

	function Line(x0, y0, x1, y1) {
		var deltax = Math.abs(x1 - x0);
		var deltay = Math.abs(y1 - y0);
		var error = 0;
		if (deltay <= deltax) {
			var deltaerr = deltay;
			var y = y0;
			if (x1 > x0) {
				for (var x = x0; x <= x1; ++x) {
					ctx.fillRect(x, y, 1, 1);
					error += deltaerr;
					if (2*error >= deltax) {
						if (y1 < y0) {
							y--;
						} else {
							y++;
						}
						error -= deltax;
					}
				}
			} else {
				for (var x = x0; x >= x1; --x) {
					ctx.fillRect(x, y, 1, 1);
					error += deltaerr;
					if (2*error >= deltax) {
						if (y1 < y0) {
							y--;
						} else {
							y++;
						}
						error -= deltax;
					}
				}
			}
		} else {
			var deltaerr = deltax;
			var x = x0;
			if (y1 > y0) {
				for (var y = y0; y <= y1; ++y) {
					ctx.fillRect(x, y, 1, 1);
					error += deltaerr;
					if (2*error >= deltay) {
						if (x1 < x0) {
							x--;
						} else {
							x++;
						}
						error -= deltay;
					}
				}
			} else {
				for (var y = y0; y >= y1; --y) {
					ctx.fillRect(x, y, 1, 1);
					error += deltaerr;
					if (2*error >= deltay) {
						if (x1 < x0) {
							x--;
						} else {
							x++;
						}
						error -= deltay;
					}
				}
			}
		}
	}
	function factorial(n) {
		return (n <= 1) ? 1 : n * factorial(n - 1);
	}
	function basis(i, n, t) {
		return (factorial(n)/(factorial(i)*factorial(n - i)))* Math.pow(t, i)*Math.pow(1 - t, n - i);
	}
	function LinePoints(StartPoints, deltat) {
		var buf = new Array()
		for (var t = 0; t < 1 + deltat; t += deltat) {
			var ind = buf.length;
			buf[ind] = new Array(0, 0);
			for (var i = 0; i < StartPoints.length; i++) {
				var b = basis(i, StartPoints.length - 1, t);
				buf[ind][0] += StartPoints[i][0] * b;
				buf[ind][1] += StartPoints[i][1] * b;
			}
		}
		return buf;
	}
	function DrawLines(arr) {
		for (var i = 0; i < arr.length - 1; ++i) {
			Line(arr[i][0],arr[i][1],arr[i+1][0],arr[i+1][1]);
		}
	}
	var x, y;
	var StartPoints = new Array();
	var i = 0;
	canvas.onmousedown = function(event) {
		if (event.button == 0) {
      isPainted = false;
			x = event.offsetX;
			y = event.offsetY;
			StartPoints[i] = new Array(x, y);
			i++;
		}
		else if (event.button == 2) {
      isPainted = true;
			x = event.offsetX;
			y = event.offsetY;
			StartPoints[i] = new Array(x, y);
			DrawLines(LinePoints(StartPoints, 0.01));
			i = 0;
      repaintLines[repaintIndex++] = StartPoints;
			StartPoints = [];
		}
	}

  canvas.onmousemove = (event) => {
    if(!isPainted) {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      x = event.offsetX;
      y = event.offsetY;
      StartPoints[i] = [x,y];
      DrawLines(LinePoints(StartPoints, 0.01));
      for(let i in repaintLines) {
        DrawLines(LinePoints(repaintLines[i], 0.01));
      }
    }
  };

})();
