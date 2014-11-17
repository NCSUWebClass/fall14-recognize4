/**
 * Holds an HTML5 canvas and allows the pixelation and unpixelation of the
 * contained image.
 *
 * Pixelation technique adapted from: http://jsfiddle.net/AbdiasSoftware/QznT7/
 */
var PixelCanvas = (function() {
    var _canvas;
    var _context;
    var _image;
    var _maxScaleFactor;
    var _scaleFactor;
    var _scaleStep;

    function PixelCanvas(canvas) {
        _canvas = canvas;

        _context = _canvas.getContext("2d");
        _context.imageSmoothingEnabled = false;
        _context.mozImageSmoothingEnabled = false;
        _context.msImageSmoothingEnabled = false;
        _context.webkitImageSmoothingEnabled = false;

        _image = new Image();
        _image.width = _canvas.width;
        _image.height = _canvas.height;
        _image.onload = PixelCanvas.prototype.pixelate;

        _maxScaleFactor = 20;
        _scaleFactor = this.maxScaleFactor;
        _scaleStep = 2;
    }

    PixelCanvas.prototype.pixelate = function() {
        _scaleFactor = _maxScaleFactor;

        var scaledWidth = (_image.width / _scaleFactor);
        var scaledHeight = (_image.height / _scaleFactor);

        _context.drawImage(_image, 0, 0, scaledWidth, scaledHeight);
        _context.drawImage(_canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, _image.width, _image.height);
    }

    PixelCanvas.prototype.unpixelate = function() {
        if (_scaleFactor > 0) {
            var scaledWidth = (_image.width / _scaleFactor);
            var scaledHeight = (_image.height / _scaleFactor);

            _context.drawImage(_image, 0, 0, scaledWidth, scaledHeight);
            _context.drawImage(_canvas, 0, 0, scaledWidth, scaledHeight, 0, 0, _image.width, _image.height);

            _scaleFactor -= _scaleStep;
        } else {
            // completely unpixelated, so clear any residual scaling issues
            _context.drawImage(_image, 0, 0, _image.width, _image.height);
        }
    }

    PixelCanvas.prototype.setImage = function(imageUrl) {
        _image.src = imageUrl;
    }

    return PixelCanvas;
})();
