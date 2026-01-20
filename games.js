(() => {
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");

  let x = 200;
  let y = 200;
  let dx = 2;
  let dy = 2;

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00bcd4";
    ctx.fillRect(x, y, 20, 20);

    x += dx;
    y += dy;

    if (x <= 0 || x >= canvas.width - 20) dx *= -1;
    if (y <= 0 || y >= canvas.height - 20) dy *= -1;

    requestAnimationFrame(loop);
  }

  loop();
})();
