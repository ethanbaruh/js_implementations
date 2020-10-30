// Initialize canvas DOM and create the context
var canvas = document.getElementById('mnist_canvas');
var ctx = canvas.getContext('2d');

// Initialize variables
var flag = false;
var x, y;

canvas.addEventListener("mousedown", function(e) {draw("down", e)});

canvas.addEventListener("mousemove", function(e) {draw("move", e)});

canvas.addEventListener("mouseup", function (e) {draw("up", e)})

// Draws shape for img input
function draw(res, e) {
   // On mousedown
   if (res == "down") {

      // Get x, y coordinates inside of the canavs so we can start to draw
      x = e.clientX - canvas.offsetLeft;
      y = e.clientY - canvas.offsetTop;

      // So we know to start drawing and to keep drawing until flag = false
      flag = true;
      ctx.moveTo(x, y);
      ctx.beginPath();
   }
   // On mousemove
   else if (res == "move") {
      if (flag) {
         // Get x, y coordinates inside of the canavs so we can start to draw
         x = e.clientX - canvas.offsetLeft;
         y = e.clientY - canvas.offsetTop;

         // Create a line to the mouse's coordinates and fill it
         ctx.lineTo(x, y);
         ctx.stroke();
      }
   }
   // On mouseup
   else if (res == "up") {
      // Set flag to false so the canvas will stop drawing
      flag = false;
   }
}

// Clear rectangle
function clearCanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}
