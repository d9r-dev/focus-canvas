const canvas = document.querySelector("#canvas");
let circleArray = [];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d")


const mouse = {
    x: undefined,
    y: undefined,
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});


window.addEventListener("load", () =>  {
    init();
}); 

function init() {
    c.fillStyle = "#1e1e2e";
    c.fillRect(0,0, canvas.with, canvas.height);


    circleArray = [];
    for (let i = 0; i < 30; i++) {
        circleArray.push(new Circle(canvas, mouse))
    }
}

class Circle {
    constructor(canvas, mouse) {
        this.minRadius = 50;
        this.maxRadius = 200;
        this.radius = (Math.random() * 100) + 50;
        this.originalRadius = this.radius;
        this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
        this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
        this.dx = (Math.random() - 0.5) * 1;
        this.dy = (Math.random() - 0.5) * 1;
        this.context = canvas.getContext("2d");
        this.mouse = mouse;
        this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)]
        this.gradient = this.context.createRadialGradient(this.x, this.y, 50, this.x, this.y, 500);
        this.gradient.addColorStop(0, "blue");
        this.gradient.addColorStop(1, "green");
    }

    colorArray = [
        "#37284D",
        "#664F63",
        "#524457",
        "#656191",
        "#784453",
        "#82585F",
        "#996E53",
        "#A39472",
        "#4F6B4C",
        "#4E7871",
        "#53868F",
        "#396275",
        "#43587A",
        "#505470",
    ]

    draw() {
        this.context.save();
        
        this.context.fillStyle = this.gradient;
        this.context.strokeStyle= this.color;
        this.context.globalAlpha = 0.40;
        this.context.filter = `drop-shadow( 0 0 5px ${this.color})`;
        this.context.translate(this.x, this.y)
        this.gradient = this.context.createRadialGradient(0, 0, 1, 0, 0, this.radius);
   
        this.gradient.addColorStop(0, this.color);
        this.gradient.addColorStop(0.76, "black")
        this.context.beginPath();
        this.context.arc(0, 0, this.radius, 0 , Math.PI *2, false);
        this.context.closePath();
        this.context.stroke();
        this.context.fill();
        this.context.restore();
    }

    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx  = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
    
        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x - this.x < 100 && mouse.x - this.x > -100 && mouse.y - this.y < 100 && mouse.y - this.y > -100) {
            if (this.radius < this.maxRadius) {
                this.radius += 1;
            }
        } else {
            if (this.radius >= this.originalRadius) {
                this.radius -= 1;
            }
        }
        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);

    c.clearRect(0, 0, innerWidth, innerHeight);

    circleArray.forEach(element => {
        element.update();
    });
}

animate();