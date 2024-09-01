// import EnemyController from "./EnemyController.js";
// import Player from "./Player.js";
// import BulletController from "./BulletController.js";
//
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext("2d");
//
// canvas.width = 600;
// canvas.height = 600;
//
// const background = new Image();
// background.src = "./assets/images/space.png";
//
// const playerBulletController = new BulletController(canvas, 10, "red", true);
// const enemyBulletController = new BulletController(canvas, 4, "white", true);
// const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController); // da fix bug máaaaa
// const player = new Player(canvas, 3, playerBulletController);
//
// let isGameOver = false;
// let didWin = false;
//
// function game() {
//     checkGameOver();
//     ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//     displayGameOver();
//     if (!isGameOver) {
//         enemyController.draw(ctx);
//         player.draw(ctx);
//         playerBulletController.draw(ctx);
//         enemyBulletController.draw(ctx);
//         //  console.log(isGameOver);
//     }
// }
//
// function displayGameOver() {
//     if (isGameOver) {
//         let text = didWin ? "Winner" : "Game Over";
//         let textOffset = didWin ? 3.5 : 5;
//
//         ctx.fillStyle = "white";
//         ctx.font = "70px Arial";
//         ctx.fillText(text, canvas.width / textOffset, canvas.height / 2)
//     }
// }
//
// function checkGameOver() {
//     if (isGameOver) {
//         return;
//     }
//     if (enemyBulletController.collideWith(player)) {
//         isGameOver = true;
//     }
//     if(enemyController.collideWith(player)){
//         isGameOver=true;
//     }
//     if(enemyController.enemyRows.length===0){
//         didWin=true;
//         isGameOver=true;
//     }
// }
//
// setInterval(game, 1000 / 120)


import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "./assets/images/space.png";

let playerBulletController = new BulletController(canvas, 10, "red", true);
let enemyBulletController = new BulletController(canvas, 4, "white", true);
let enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
let player = new Player(canvas, 3, playerBulletController);

let isGameOver = false;
let didWin = false;
let frameRate = 60; // Default frame rate
let frameInterval = 1000 / frameRate;

function game() {
    checkGameOver();
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    displayGameOver();
    if (!isGameOver) {
        enemyController.draw(ctx);
        player.draw(ctx);
        playerBulletController.draw(ctx);
        enemyBulletController.draw(ctx);
    }
}

function displayGameOver() {
    if (isGameOver) {
        let text = didWin ? "Winner" : "Game Over";
        let textOffset = didWin ? 3.5 : 5;

        ctx.fillStyle = "white";
        ctx.font = "70px Arial";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
}

function checkGameOver() {
    if (isGameOver) {
        return;
    }
    if (enemyBulletController.collideWith(player)) {
        isGameOver = true;
    }
    if (enemyController.collideWith(player)) {
        isGameOver = true;
    }
    if (enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

function updateInterval() {
    frameInterval = 1000 / frameRate;
    clearInterval(gameInterval);
    gameInterval = setInterval(game, frameInterval);
}

let gameInterval = setInterval(game, frameInterval);

document.getElementById('level-button').addEventListener('click', () => {
    frameRate = (frameRate === 60) ? 120 : 60;
    updateInterval();
});

document.getElementById('reset-button').addEventListener('click', () => {
    // Reset game state
    playerBulletController = new BulletController(canvas, 10, "red", true);
    enemyBulletController = new BulletController(canvas, 4, "white", true);
    enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
    player = new Player(canvas, 3, playerBulletController);

    isGameOver = false;
    didWin = false;
    frameRate = 60; // Reset to default frame rate
    updateInterval();
});