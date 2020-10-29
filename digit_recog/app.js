var canvas = document.getElementById('mnist_canvas');
var ctx = canvas.getContext('2d');

var mouse = {x: 0, y: 0};

canvas.addEventListener("mousemove", function(e) {
   mouse.x = e.pageX - this.offsetLeft;
   mouse.y = e.pageY - this.offsetTop;
});

context.lineWidth = 60;
context.lineJoin = 'round';
context.lineCap = 'round';
context.strokeStyle = '#0000FF';

canvas.addEventListener("mousedown", function(e) {
   ctx.moveTo(mouse.x, mouse.y);
   ctx.beginPath();
   canvas.addEventListener('mousemove', onPaint());
});

canvas.addEventListener("mouseup", function () {
   canvas.removeEventListener("mousemove", onpaint);
   var img = new Image();
   img.onload = function() {
      ctx.drawImage(img, 0, 0, 28, 28);
      data = ctx.getImageData(0, 0, 28, 28).data;
      var input = [];
      for (var i = 0; i < data.length; i += 4) {
         input.push(data[i + 2] / 255);
      }
   }
   img.src = canvas.toDataURL('image/png');
})

function onPaint() {
   ctx.lineTo(mouse.x, mouse.y);
   ctx.stroke();
}
