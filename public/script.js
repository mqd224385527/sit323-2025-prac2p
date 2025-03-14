// 创建漂浮爱心背景
const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');

// 设置画布大小
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 爱心粒子数组
let hearts = [];

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 20 + 10;
        this.speedY = Math.random() * 3 + 1;
        this.angle = 0;
    }

    update() {
        this.y -= this.speedY;
        this.angle += 0.1;
        if (this.y < -this.size) {
            this.y = canvas.height + this.size;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-10, -10, -20, 10, 0, 20);
        ctx.bezierCurveTo(20, 10, 10, -10, 0, 0);
        ctx.fill();
        ctx.restore();
    }
}

// 初始化爱心
function init() {
    for (let i = 0; i < 30; i++) {
        hearts.push(new Heart());
    }
}

// 动画循环
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(heart => {
        heart.update();
        heart.draw();
    });
    requestAnimationFrame(animate);
}

// 窗口大小调整时重置画布
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// 启动
init();
animate();
