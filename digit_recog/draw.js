var canvas = document.getElementById('mnist_canvas');
var ctx = canvas.getContext('2d');
window.alert(canvas.offsetTop);

canvas.addEventListener("mousedown", function(e) {
   var x = e.clientX - canvas.offsetLeft;
   var y = e.clientY - canvas.offsetTop;

   ctx.moveTo(x, y);
   ctx.beginPath();
});

canvas.addEventListener("mousemove", function(e) {
   // TODO: Add functionality here
});
