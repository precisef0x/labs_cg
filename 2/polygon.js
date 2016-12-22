(() => {

  const canvas = document.querySelector('.page__canvas');
	const context = canvas.getContext('2d');
	let ymax = 0; let ymin = 1000;
	let points = [];
	let i = 0;

	let blockMenu = () => {
    		document.querySelector('.page__canvas').innerHTML = "Blocked";
	};

	document.oncontextmenu = () => {
    blockMenu(); return false;
  };

  let compareNumeric = (a, b) => {
  		if (a > b) return 1;
  		if (a < b) return -1;
	};

	let draw = (points, ymin, ymax) => {
		var arr = new Array();
		for (var i = ymin; i <= ymax; ++i)
			arr[i] = new Array();
		var ytemp, xtemp, proizv, buf, deltay1, deltay2;
		for (var i = 0; i < points.length-1; ++i) {
			if (i != 0) {
				deltay2 = deltay1;
				deltay1 = points[i+1][1] - points[i][1];
			}
			else {
				deltay1 = points[i+1][1] - points[i][1];
				deltay2 = deltay1;
			}
			proizv = (points[i+1][0] - points[i][0])/(Math.abs(points[i+1][1] - points[i][1]));
			xtemp = points[i][0];
			if (points[i+1][1] > points[i][1]) {
				if (deltay1*deltay2 > 0) {
					for (var j = points[i][1]; j < points[i+1][1]; ++j) {
						buf = arr[j].length;
						arr[j][buf] = xtemp;
						xtemp += proizv;
					}
				}
				else {
					for (var j = points[i][1]+1; j < points[i+1][1]; ++j) {
						buf = arr[j].length;
						arr[j][buf] = xtemp;
						xtemp += proizv;
					}
				}
			}
			else if (points[i+1][1] < points[i][1]) {
				if (deltay1*deltay2 > 0) {
					for (var j = points[i][1]; j > points[i+1][1]; --j) {
						buf = arr[j].length;
						arr[j][buf] = xtemp;
						xtemp += proizv;
					}
				}
				else {
					for (var j = points[i][1]-1; j > points[i+1][1]; --j) {
						buf = arr[j].length;
						arr[j][buf] = xtemp;
						xtemp += proizv;
					}
				}
			}
			else {
				ytemp = points[i][1];
				buf = arr[ytemp].length;
				arr[ytemp][buf] = points[i][0];
				arr[ytemp][buf+1] = points[i+1][0];
			}
		}


		deltay2 = deltay1;
		deltay1 = points[0][1] - points[points.length-1][1];
		proizv = (points[0][0] - points[points.length-1][0])/(Math.abs(points[0][1] - points[points.length-1][1]));
		xtemp = points[points.length-1][0];
			if (points[0][1] > points[points.length-1][1]) {
				if (deltay1*deltay2 > 0) {
					for (var j = points[points.length-1][1]; j < points[0][1]; ++j) {
						buf = arr[j].length;
						arr[j][buf] = xtemp;
						xtemp += proizv;
					}
				}
				else {
					for (var j = points[points.length-1][1]+1; j < points[0][1]; ++j) {
						buf = arr[j].length;
						arr[j][buf] = xtemp;
						xtemp += proizv;
					}
				}
			}
			else if (points[0][1] < points[points.length-1][1]) {
				if (deltay1*deltay2 > 0) {
					for (var j = points[points.length-1][1]; j > points[0][1]; --j) {
						buf = arr[j].length;
						arr[j][buf] = xtemp;
						xtemp += proizv;
					}
				}
				else {
					for (var j = points[points.length-1][1]-1; j > points[0][1]; --j) {
						buf = arr[j].length;
						arr[j][buf] = xtemp;
						xtemp += proizv;
					}
				}
			}
			else {
				ytemp = points[points.length-1][1];
				buf = arr[ytemp].length;
				arr[ytemp][buf] = points[points.length-1][0];
				arr[ytemp][buf+1] = points[0][0];
			}


		for (var i = ymin; i <= ymax; ++i)
			arr[i].sort(compareNumeric);

		for (var i = ymin; i <= ymax; ++i) {
			for (var j = 0; j < arr[i].length; j += 2) {
				for (var u = arr[i][j]; u < arr[i][j+1]; u++)
					context.fillRect(u, i, 2, 2);
			}
		}
	}


	canvas.onmousedown = (event) => {
		if (event.button == 0) {
			x = event.offsetX;
			y = event.offsetY;
			if (ymin > y)
				ymin = y;
			if (ymax < y)
				ymax = y;
			points[i] = new Array(x, y);
			i++;
		}
		else if (event.button == 2) {
			x = event.offsetX;
			y = event.offsetY;
			if (ymin > y)
				ymin = y;
			if (ymax < y)
				ymax = y;
			points[i] = new Array(x, y);

			draw(points, ymin, ymax);
			i = 0;
			points = [];
		}
	}
})();
