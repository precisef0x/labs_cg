((global) => {

  global.Line = (x0, y0, x1, y1, context) => {
    var deltax = Math.abs(x1 - x0);
    var deltay = Math.abs(y1 - y0);
    var error = 0;
    if (deltay <= deltax) {
      var deltaerr = deltay;
      var y = y0;
      if (x1 > x0) {
        for (var x = x0; x <= x1; ++x) {
          context.fillRect(x, y, 1, 1);
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
          context.fillRect(x, y, 1, 1);
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
          context.fillRect(x, y, 1, 1);
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
          context.fillRect(x, y, 1, 1);
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
  };

  global.Circle = (xPos, yPos, r, context) => {
		context.translate(xPos, yPos);
		var x = -r;
		var y = 0;
		F = 1-r;
		delta_Fs = 3;
		delta_Fd = 5-2*r;
		while( x + y < 0 ) {
      			context.fillRect(x, y, 1, 1);
      			if( F > 0 ) {
            			F += delta_Fd;
            			x++; y++;
            			delta_Fs += 2;
            			delta_Fd += 4;
      			}
      			else {
            			F += delta_Fs;
            			y++;
            			delta_Fs += 2;
            			delta_Fd += 2;
      			}
		}
		context.scale(1,-1);
		var x = -r;
		var y = 0;
		F = 1-r;
		delta_Fs = 3;
		delta_Fd = 5-2*r;
		while( x + y < 0 ){
      			context.fillRect(x, y, 1, 1);
      			if( F > 0 ){
            			F += delta_Fd;
            			x++; y++;
            			delta_Fs += 2;
            			delta_Fd += 4;
      			}
      			else {
            			F += delta_Fs;
            			y++;
            			delta_Fs += 2;
            			delta_Fd += 2;
      			}
		}
		context.scale(-1,1);
		var x = -r;
		var y = 0;
		F = 1-r;
		delta_Fs = 3;
		delta_Fd = 5-2*r;
		while( x + y < 0 ){
      			context.fillRect(x, y, 1, 1);
      			if( F > 0 ){
            			F += delta_Fd;
            			x++; y++;
            			delta_Fs += 2;
            			delta_Fd += 4;
      			}
      			else {
            			F += delta_Fs;
            			y++;
            			delta_Fs += 2;
            			delta_Fd += 2;
      			}
		}
		context.scale(1,-1);
		var x = -r;
		var y = 0;
		F = 1-r;
		delta_Fs = 3;
		delta_Fd = 5-2*r;
		while( x + y < 0 ){
      			context.fillRect(x, y, 1, 1);
      			if( F > 0 ){
            			F += delta_Fd;
            			x++; y++;
            			delta_Fs += 2;
            			delta_Fd += 4;
      			}
      			else {
            			F += delta_Fs;
            			y++;
            			delta_Fs += 2;
            			delta_Fd += 2;
      			}
		}
		context.scale(-1,1);
		var x = 0;
		var y = -r;
		F = 1-r;
		delta_Fs = 5-2*r;
		delta_Fd = 3;
		while( x + y < 0 ) {
      			context.fillRect(x, y, 1, 1);
      			if( F > 0 ) {
            			F += delta_Fs;//delta_Fd;
            			x++; y++;
            			delta_Fs += 4;
            			delta_Fd += 2;
      			}
      			else {
            			F += delta_Fd;
            			x++;
            			delta_Fs += 2;
            			delta_Fd += 2;
      			}
		}
		context.scale(-1,1);
		var x = 0;
		var y = -r;
		F = 1-r;
		delta_Fs = 5-2*r;
		delta_Fd = 3;
		while( x + y < 0 ) {
      			context.fillRect(x, y, 1, 1);
      			if( F > 0 ) {
            			F += delta_Fs;//delta_Fd;
            			x++; y++;
            			delta_Fs += 4;
            			delta_Fd += 2;
      			}
      			else {
            			F += delta_Fd;
            			x++;
            			delta_Fs += 2;
            			delta_Fd += 2;
      			}
		}
		context.scale(1,-1);
		var x = 0;
		var y = -r;
		F = 1-r;
		delta_Fs = 5-2*r;
		delta_Fd = 3;
		while( x + y < 0 ) {
      			context.fillRect(x, y, 1, 1);
      			if( F > 0 ) {
            			F += delta_Fs;//delta_Fd;
            			x++; y++;
            			delta_Fs += 4;
            			delta_Fd += 2;
      			}
      			else {
            			F += delta_Fd;
            			x++;
            			delta_Fs += 2;
            			delta_Fd += 2;
      			}
		}
		context.scale(-1,1);
		var x = 0;
		var y = -r;
		F = 1-r;
		delta_Fs = 5-2*r;
		delta_Fd = 3;
		while( x + y < 0 ) {
      			context.fillRect(x, y, 1, 1);

      			if( F > 0 ) {
            			F += delta_Fs;//delta_Fd;
            			x++; y++;
            			delta_Fs += 4;
            			delta_Fd += 2;
      			}
      			else {
            			F += delta_Fd;
            			x++;
            			delta_Fs += 2;
            			delta_Fd += 2;
      			}
		}
		context.scale(1,-1);
		context.translate((-1)*xPos, (-1)*yPos);
	};

})(this);
