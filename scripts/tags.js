window.onload = function() {
  let canvas = document.getElementById("canvas-demo");

  initDraw(canvas);

  canvas.addEventListener('mouseover', function() {
    if (canvas.getContext) {
      clearCanvas(canvas);
      let ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(255, 168, 97)';
      ctx.beginPath();
      ctx.arc(60, 50, 30, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.fillStyle = 'rgb(255, 144, 97)';
      ctx.beginPath();
      ctx.arc(110, 50, 30, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.fillStyle = 'rgb(255, 131, 97)';
      ctx.beginPath();
      ctx.arc(160, 50, 30, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.fillStyle = 'rgb(255, 97, 97)';
      ctx.beginPath();
      ctx.arc(210, 50, 30, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.fillStyle = 'rgb(255, 97, 178)';
      ctx.beginPath();
      ctx.arc(260, 50, 30, 0, Math.PI * 2, true);
      ctx.fill();
    }
  });

  canvas.addEventListener('mouseout', function() {
    clearCanvas(canvas);
    initDraw(canvas);
  });
};

function initDraw(canvas) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = '20px Playfair Display, serif';
    ctx.textAlign = 'center';
    ctx.fillText('Mouse over me', 160, 58);
  }
}

function clearCanvas(canvas) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
