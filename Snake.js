// Vault-ready Snake game (rectangles instead of images)
export function startSnakeGame(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    const DOT_SIZE = 10;
    const ALL_DOTS = 900;
    const MAX_RAND = 29;
    const DELAY = 140;
    const C_HEIGHT = canvas.height;
    const C_WIDTH = canvas.width;

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    let x = new Array(ALL_DOTS);
    let y = new Array(ALL_DOTS);

    let dots;
    let apple_x;
    let apple_y;

    let leftDirection = false;
    let rightDirection = true;
    let upDirection = false;
    let downDirection = false;
    let inGame = true;

    // Initialize the snake
    function createSnake() {
        dots = 3;
        for (let z = 0; z < dots; z++) {
            x[z] = 50 - z * DOT_SIZE;
            y[z] = 50;
        }
    }

    function locateApple() {
        let r = Math.floor(Math.random() * MAX_RAND);
        apple_x = r * DOT_SIZE;
        r = Math.floor(Math.random() * MAX_RAND);
        apple_y = r * DOT_SIZE;
    }

    function checkApple() {
        if (x[0] === apple_x && y[0] === apple_y) {
            dots++;
            locateApple();
        }
    }

    function move() {
        for (let z = dots; z > 0; z--) {
            x[z] = x[z - 1];
            y[z] = y[z - 1];
        }
        if (leftDirection) x[0] -= DOT_SIZE;
        if (rightDirection) x[0] += DOT_SIZE;
        if (upDirection) y[0] -= DOT_SIZE;
        if (downDirection) y[0] += DOT_SIZE;
    }

    function checkCollision() {
        for (let z = dots; z > 4; z--) {
            if (x[0] === x[z] && y[0] === y[z]) inGame = false;
        }
        if (x[0] >= C_WIDTH || x[0] < 0 || y[0] >= C_HEIGHT || y[0] < 0) inGame = false;
    }

    function doDrawing() {
        ctx.clearRect(0, 0, C_WIDTH, C_HEIGHT);

        if (inGame) {
            // Draw apple
            ctx.fillStyle = "red";
            ctx.fillRect(apple_x, apple_y, DOT_SIZE, DOT_SIZE);

            // Draw snake
            for (let z = 0; z < dots; z++) {
                ctx.fillStyle = z === 0 ? "green" : "blue";
                ctx.fillRect(x[z], y[z], DOT_SIZE, DOT_SIZE);
            }
        } else {
            gameOver();
        }
    }

    function gameOver() {
        ctx.fillStyle = "white";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.font = "bold 18px sans-serif";
        ctx.fillText("Game Over", C_WIDTH / 2, C_HEIGHT / 2);
    }

    function gameCycle() {
        if (inGame) {
            checkApple();
            checkCollision();
            move();
            doDrawing();
            setTimeout(gameCycle, DELAY);
        }
    }

    // Key controls
    window.addEventListener("keydown", (e) => {
        const key = e.keyCode;
        if (key === LEFT_KEY && !rightDirection) {
            leftDirection = true; upDirection = false; downDirection = false;
        }
        if (key === RIGHT_KEY && !leftDirection) {
            rightDirection = true; upDirection = false; downDirection = false;
        }
        if (key === UP_KEY && !downDirection) {
            upDirection = true; rightDirection = false; leftDirection = false;
        }
        if (key === DOWN_KEY && !upDirection) {
            downDirection = true; rightDirection = false; leftDirection = false;
        }
    });

    // Initialize game
    createSnake();
    locateApple();
    gameCycle();
}
