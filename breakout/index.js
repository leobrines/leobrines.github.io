let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")

let x = canvas.width/2
let y = canvas.height-30

let dx = 2
let dy = -2

let ballRadius = 10

let paddleHeight = 10
let paddleWidth = 75
let paddleX = (canvas.width-paddleWidth)/2
let paddleY = canvas.height - paddleHeight

let rightPressed = false;
let leftPressed = false;

let brickRowCount = 3
let brickColumnCount = 5
let brickWidth = 75
let brickHeight = 20
let brickPadding = 10
let brickOffsetTop = 30
let brickOffsetLeft = 30
let bricks = createInitialBrick()

let score = 0

let lives = 3

function createInitialBrick() {
    let bricks = []

    for (let i = 0; i < brickColumnCount; i++) {
        bricks[i] = []
    
        for (let k = 0; k < brickRowCount; k++) {
            bricks[i][k] = {
                x: i * (brickWidth + brickPadding) + brickOffsetLeft,
                y: k * (brickHeight + brickPadding) + brickOffsetTop,
                live: true
            }
        }
    }

    return bricks
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    drawBall()
    drawPaddle()
    drawBricks()
    drawScore()
    drawLives()

    updateBallPosition()
    updatePaddlePosition()

    brickCollisionDetection()

    requestAnimationFrame(draw)
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(x, y, ballRadius, 0, Math.PI*2)
    ctx.fillStyle = "#0095DD"
    ctx.fill()
    ctx.closePath()
}

function updateBallPosition() {
    nextX = x + dx
    nextY = y + dy

    // Check top collision
    if (nextY < ballRadius) {
        dy = -dy
    }

    // Check paddle collision
    if (nextY > canvas.height-ballRadius * 2) {
        if (paddleX-ballRadius/2 < x  && x < paddleX + paddleWidth+ballRadius/2) {
            dy = -dy
        }
    }

    // Check bottom collision
    if (nextY > canvas.height-ballRadius) {
        lives--;

        if (!lives) {
            alert("GAME OVER")
            document.location.reload()
        } else {
            resetBallPosition()
        }
    }

    // Check horizontal collision
    if (nextX < ballRadius || nextX > canvas.width-ballRadius) {
        dx = -dx
    }

    x += dx
    y += dy
}

function resetBallPosition() {
    x = canvas.width/2
    y = canvas.height-30
    dx = 2
    dy = -2
    paddleX = (canvas.width-paddleWidth)/2
}

function drawPaddle() {
    ctx.beginPath()
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight)
    ctx.fillStyle = "#0095DD"
    ctx.fill()
    ctx.closePath()
}

function updatePaddlePosition() {
    if (rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7
    }

    if (leftPressed && paddleX > 0) {
        paddleX -= 7
    }
}

function drawBricks() {
    for (var i = 0; i < brickColumnCount; i++) {
        for (var k = 0; k < brickRowCount; k++) {
            let brick = bricks[i][k]

            if (!brick.live) {
                continue
            }

            ctx.beginPath()
            ctx.rect(brick.x, brick.y, brickWidth, brickHeight)
            ctx.fillStyle = "#0095DD"
            ctx.fill()
            ctx.closePath()
        }
    }
}

function brickCollisionDetection() {
    for (var i = 0; i < brickColumnCount; i++) {
        for (var k = 0; k < brickRowCount; k++) {
            let brick = bricks[i][k]

            if (!brick.live) {
                continue
            }

            if (brick.x < x && x < brick.x + brickWidth &&
                brick.y < y && y < brick.y + brickHeight) {
                dy = -dy
                brick.live = false
                score++
            }

            if (score == brickRowCount * brickColumnCount) {
                alert("You win! Congratulations!")
                document.location.reload()
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial"
    ctx.fillStyle = "#0095DD"
    ctx.fillText("Score: " + score, 8, 20)
}

function drawLives() {
    ctx.font = "16px Arial"
    ctx.fillStyle = "#0095DD"
    ctx.fillText("Lives: " + lives, canvas.width-65, 20)
}

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)
document.addEventListener("mousemove", mouseMoveHandler, false)

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true
    } else if (e.keyCode == 37) {
        leftPressed = true
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false
    } else if (e.keyCode == 37) {
        leftPressed = false
    }
}

function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft

    if (0 < relativeX && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2
    }
}

draw()


