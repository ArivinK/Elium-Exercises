function Shape(x,y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.describeLocation = function () {
    return "I am located at " + this.x + ", " + this.y;
};

Shape.prototype.giveLocation = function () {
    return "My coordinates are " + this.x + ", " + this.y;
};

var myShape = new Shape(1,2);
console.log(myShape.describeLocation());
console.log(myShape.giveLocation());

function Circle (x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.calculateArea = function () {
    //console.log(Math.PI, this.radius, this.radius, this);
    return "My area is " + (Math.PI * 2 * this.radius);
};

Circle.prototype.calculateLength = function () {
    //console.log(Math.PI, this.radius, this.radius, this);
    return "My length is " + (Math.PI * this.radius * this.radius);
};

var myFirstCircle = new Circle(3, 4, 10);
console.log(myFirstCircle.calculateArea());
console.log(myFirstCircle.calculateLength());
var mySecondCircle = new Circle(3, 4, 9);
console.log(mySecondCircle.calculateArea());
console.log(mySecondCircle.calculateLength());


