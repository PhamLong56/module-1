import Enemy from "./Enemy.js";
import MovingDirection from "./MovingDirection.js";


export default class EnemyController {          // lớp điều khiển enemy
    enemyMap = [  //thuộc tính sơ đồ săp xếp enemy
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    ];
    enemyRows = []; // thuộc tính các hàng enemy

    currentDirection = MovingDirection.right; // thuộc tính di chuyển hiện tại của enemy
    xVelocity = 0;
    yVelocity = 0;
    defaultXVelocity = 1;
    defaultYVelocity = 1;
    moveDownTimerDefault = 30;
    moveDownTimer = this.moveDownTimerDefault;
    fireBulletTimerDefault = 10;
    fireBulletTimer = this.fireBulletTimerDefault;

    constructor(canvas, enemyBulletController, playerBulletController) {
        this.canvas = canvas;
        this.enemyBulletController = enemyBulletController;
        this.playerBulletController = playerBulletController;

        this.enemyDeathSound = new Audio("./assets/sounds/enemy-death.wav");
        this.enemyDeathSound.volume = 0.5;

        this.createEnemies();
    }

    draw(ctx) { // vẽ các phương thức  của enemy lên màn hinhf
        this.decrementMoveDownTimer(); //  hướng di chuyển xuống dưới cuar enemy
        this.updateVelocityAndDirection(); // tốc độ và hương di chuyển
        this.collisionDetection(); // phương thức va cham
        this.drawEnemies(ctx); // vẽ enemy bằng canvas
        this.resetMoveDownTimer(); // reset bôj đếm time khi ênemy di chuyển xuống
        this.fireBullet(); // đạn của enemy
        // console.log(this.moveDownTimer)
    }
    collisionDetection() { //kiểm tra các va chạm
        this.enemyRows.forEach((enemyRow) => {
            enemyRow.forEach((enemy,enemyIndex) => {
                if(this.playerBulletController.collideWith(enemy)){
                    this.enemyDeathSound.currentTime=0;
                    this.enemyDeathSound.play();
                    enemyRow.splice(enemyIndex,1);
                }
            })
        })

        this.enemyRows= this.enemyRows.filter((enemyRow)=> enemyRow.length>0)
    }

    fireBullet() {
        this.fireBulletTimer--;
        if (this.fireBulletTimer <= 0) {
            this.fireBulletTimer = this.fireBulletTimerDefault;
            const allEnemies = this.enemyRows.flat();
            const enemyIndex = Math.floor(Math.random() * allEnemies.length);
            const enemy = allEnemies[enemyIndex];
            this.enemyBulletController.shoot(enemy.x + enemy.width /2  , enemy.y, -10); //bugggggggg

            console.log(enemyIndex)
        }

    }

    resetMoveDownTimer() {
        if (this.moveDownTimer <= 0) {
            this.moveDownTimer = this.moveDownTimerDefault;
        }
    }

    decrementMoveDownTimer() {
        if (
            this.currentDirection === MovingDirection.downLeft ||
            this.currentDirection === MovingDirection.downRight
        ) {
            this.moveDownTimer--;
        }
    }

    updateVelocityAndDirection() {
        for (const enemyRow of this.enemyRows) {
            if (this.currentDirection === MovingDirection.right) {
                // xác định hướng di chuyển hiện tại của enemy bằng với hướng bên phải
                this.xVelocity = this.defaultXVelocity; // vận tốc enemy = với vtoc mặc định
                this.yVelocity = 0; // hướng xuống =0
                // tạo biến thể hiện ênemy sát mép là index -1 tính từ cuối mảng
                const rightMostEnemy = enemyRow[enemyRow.length - 1];
                if (rightMostEnemy.x + rightMostEnemy.width >= this.canvas.width) {
                    // nếu mép enemy theo hướng x bằng với width của canvas thì enemy di chuyển sang trái
                    this.currentDirection = MovingDirection.downLeft;
                    break;
                }
            } else if (this.currentDirection === MovingDirection.downLeft) {

                if (this.moveDown(MovingDirection.left)) {
                    break;
                }
            } else if (this.currentDirection === MovingDirection.left) {
                this.xVelocity = -this.defaultXVelocity;
                this.yVelocity = 0;
                const leftMostEnemy = enemyRow[0];
                if (leftMostEnemy.x <= 0) {
                    this.currentDirection = MovingDirection.downRight;
                    break;
                }
            } else if (this.currentDirection === MovingDirection.downRight) {
                if (this.moveDown(MovingDirection.right)) {
                    break;
                }
            }
        }
    }

    moveDown(newDirection) {
        this.xVelocity = 0;
        this.yVelocity = this.defaultYVelocity;
        if (this.moveDownTimer <= 0) {
            this.currentDirection = newDirection;
            return true;
        }
        return false;
    }

    drawEnemies(ctx) {
        this.enemyRows.flat().forEach((enemy) => {
            enemy.move(this.xVelocity, this.yVelocity);
            enemy.draw(ctx);
        })
    }

    createEnemies() {// tạo ra các ênemy dựa trên mảng 2 chiều
        this.enemyMap.forEach((row, rowIndex) => {  // sư dụng for/each để duyệt qua object sơ đồ
            this.enemyRows[rowIndex] = [];
            row.forEach((enemyNumber, enemyIndex) => {
                if (enemyNumber > 0) {
                    this.enemyRows[rowIndex].push(
                        new Enemy(enemyIndex * 50, rowIndex * 35, enemyNumber)
                    )
                }
            })
        })
    }
    collideWith(sprite){
        return this.enemyRows.flat().some(eneny=> eneny.collideWith(sprite));
    }
}