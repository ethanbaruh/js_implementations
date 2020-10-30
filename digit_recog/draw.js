// Initialize canvas DOM and create the context
var canvas = document.getElementById('mnist_canvas');
var ctx = canvas.getContext('2d');

canvas.addEventListener("mousedown", function(e) {
   // Get x, y coordinates inside of the canavs so we can start to draw
   var x = e.clientX - canvas.offsetLeft;
   var y = e.clientY - canvas.offsetTop;

   // Prepare the context to begin drawing
   ctx.moveTo(x, y);
   ctx.beginPath();
});

canvas.addEventListener("mousemove", function(e) {
   // TODO: Add functionality here
});
