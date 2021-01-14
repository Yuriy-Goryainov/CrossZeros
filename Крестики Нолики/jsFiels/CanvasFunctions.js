

//функция для рисования прямоугольника
function rectangle(x = 100, y = 100, width = 100, height = 100, FillColor, StrokeColor, LineWidth) {
   ctx.fillStyle = FillColor;
   ctx.fillRect(x, y, width, height);
    if (LineWidth !== 0){
        ctx.strokeStyle = StrokeColor;
        ctx.lineWidth = LineWidth;
        ctx.strokeRect (x, y, width, height)
    }
}

//функция для создания фона
function bg (color){
    ctx.fillStyle = color;
    ctx.fillRect (0, 0, WidthCanvas, HeightCanvas)
}

//функция для создания треугольника
function tringle(x1, y1, x2, y2, x3, y3, lineWidth, StrokeColor, FillColor) {
    ctx.beginPath();
    ctx.fillStyle = FillColor;
    ctx.strokeStyle = StrokeColor;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

//функция создания сетки
function grid (gridWidth = WidthCanvas, gridHeight = HeightCanvas, step = 100) {
    bg ('white');

    y = 0;
    x = 0;

    checkRepiatHeight = 0;
    checkRepiatWidth = 0;

    repiatWidth = gridWidth / step;
    repiatHeight = gridHeight / step;

    //создание линий и текста по горизонтали
    while (checkRepiatHeight <= repiatHeight){
        //текст
        ctx.fillStyle = 'black';
        ctx.fillText (y, 10, y - 10);
        //сетка
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.moveTo (0, y);
        ctx.lineTo (gridWidth, y);
        ctx.stroke ();
        ctx.closePath ();
        y += step;
        checkRepiatHeight += 1;
    }

    // создание линий и текста по вертикали
    while (checkRepiatWidth <= repiatWidth){
        //текст
        ctx.fillStyle = 'black';
        ctx.fillText (x, x - 30, 15);
        //сетка
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.moveTo (x, 0);
        ctx.lineTo (x, gridHeight);
        ctx.stroke ();
        ctx.closePath ();
        x += step;
        checkRepiatWidth += 1;
    }
}

//функция для рисования круга (дуги)
function arc (x, y, lengthRadius, StartAngle, EndAngle, CLockWise, FillColor, StrokeColor, LineWidth){
    ctx.beginPath ();
    ctx.arc (x, y, lengthRadius, StartAngle, EndAngle, CLockWise);
    if (FillColor != 0) {
        ctx.fillStyle = FillColor;
        ctx.fill();
    }
    if (StrokeColor != 0) {
        ctx.lineWidth = LineWidth;
        ctx.strokeStyle = StrokeColor;
        ctx.stroke();
    }
    ctx.closePath ();
}

//функция создания линии
function line (x1, y1, x2, y2, StrokeColor, LineWidth, LineCap) {
    ctx.beginPath ();
    ctx.strokeStyle = StrokeColor;
    ctx.lineWidth = LineWidth;
    ctx.lineCap = LineCap;
    ctx.moveTo (x1, y1);
    ctx.lineTo (x2, y2);
    ctx.stroke ();
    ctx.closePath ();
}