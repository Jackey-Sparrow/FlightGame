
//Crash Detection
var GetRectangleCenter = function (rectangle) {
    var x = rectangle.X,
    y = rectangle.Y,
    width = rectangle.Width;
    height = rectangle.Height;
    return {
        X: x - width / 2,
        Y: y + height / 2
    }
};

var GetRadius = function (rectangle) {
    width = rectangle.Width;
    height = rectangle.Height;
    var radius = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 2;
};

var GetCrashDection = function (rectangle1, rectangle2) {

};