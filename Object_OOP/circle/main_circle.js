class Circle {
    radius;
    color;

    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius(radius) {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getColor(color) {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }


}

let circle = new Circle(2, 'red');
let radius = circle.getRadius();
let area = circle.getArea();
// let color = circle.getColor();
console.log(area.toFixed(2), radius, circle.getColor());
circle.setColor("pink");
// color= circle.getColor();

console.log(area.toFixed(2), radius, circle.getColor());
console.log(area, radius);
