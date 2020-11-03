// Initialize canvas DOM and create the context
var canvas = document.getElementById('mnist_canvas');
var ctx = canvas.getContext('2d');

// Change styling on context
ctx.lineWidth = 10.0;
ctx.strokeStyle = "red";

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
      saveImg();
   }
}

// Clear rectangle
function clearCanvas() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveImg() {
   // Create new img object to store the img data in
   var img = new Image();
   img.onload = function() {
      ctx.drawImage(img, 0, 0, 28, 28);
      // Get the data from the img ctx
      var data = ctx.getImageData(0, 0, 28, 28).data;

      // Create an empty input array then iterate through the context data
      //    and push it to the input array. The drawing is in red so we can skip
      //    every four values since the ImageObject is RGBA
      var input = [];
      for (i = 0; i < data.length; i += 4) {
         // Push data to input array and then normalize it to be in [0, 1] range
         input.push(data[i] / 255);
      }
      console.log(input.length);
   }
   img.src = canvas.toDataURL('image/png');

}
