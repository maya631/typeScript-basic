class Item {
    private itemName !: string;
    private itemPrice !: number;

    // Constructor to initialize the item   
    constructor(name: string, price: number) {
        //this.itemName = name;
        //this.itemPrice = price;
        this.setItemName(name);
        this.setItemPrice(price);
    }

    public getItemName(): string {
        return this.itemName;
    }

    public getItemPrice(): number {
        return this.itemPrice;
    }

    public setItemName(name: string): void {
        if (name.trim() === "") {
            throw new Error("Item name cannot be empty.");
        }
        this.itemName = name;
    }

    public setItemPrice(price: number): void {
        if (price < 0) {
            throw new Error("Item price cannot be negative.");
        }
        this.itemPrice = price;
    }
}

let item1 = new Item("Laptop", 5);
console.log("Item Name: " + item1.getItemName());//to access the private property itemName using the public method getItemName
console.log("Item Price: $" + item1.getItemPrice());
console.log(item1);

console.log("*******************************");

/*

Shape: --> to reduce code duplication and promote 
code reusability, we can create a base class called 
Shape that contains common properties and methods for 
all shapes. Then, we can create specific classes for 
each shape (like Rectangle, Square, Circle, Cube, Cylinder) 
that inherit from the Shape class and implement their own 
area() and perimeter() methods.
area()
perimeter()


Rectangle:
length
width
area()
perimeter()

Square:
side
area()
perimeter()

Circle:
radius
area()
perimeter()

Cube:
side
volume()
area()
perimeter()

Cylinder:
redius
height
volume()
area()
perimeter()

*/

abstract class Shape {
    public abstract area(): number;
    public abstract perimeter(): number;
}

interface Volume {
    volume(): number;
}

class Rectangle extends Shape {
    public length!: number;
    public width !: number;
    constructor(length: number, width : number) {
        super();
        this.length = length;
        this.width = width;
    }

    public area(): number {
        return this.length * this.width;
    }

    public perimeter(): number {
        return 2 * (this.length + this.width);
    }
}

class Square extends Shape {
    public side !: number
    constructor(side: number) {
        super();
        this.side = side;
    }   

    public area(): number {
        return this.side * this.side;
    }

    public perimeter(): number {
        return 4 * this.side;
    }
}

class Circle extends Shape {
    public radius !: number
    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    public area(): number {
        return Math.PI * this.radius * this.radius;
    }

    public perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Cube extends Shape implements Volume {
    public side !: number
    constructor(side: number) {
        super();
        this.side = side;
    }

    public area(): number {
        return 6 * this.side * this.side;
    }

    public volume(): number {
        return this.side * this.side * this.side;
    }
    public perimeter(): number {
        return 12 * this.side;
    }
}

class Cylinder extends Shape implements Volume {
    public radius !: number
    public height !: number
    constructor(radius: number, height: number) {
        super();
        this.radius = radius;
        this.height = height;
    }

    public area(): number {
        return 2 * Math.PI * this.radius * (this.radius + this.height);
    }   

    public volume(): number {
        return Math.PI * this.radius * this.radius * this.height;
    }
    public perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

let rectangle = new Rectangle(5, 3);
console.log(rectangle);
console.log("Rectangle Area: " + rectangle.area());
console.log("Rectangle Perimeter: " + rectangle.perimeter());

let square = new Square(4);
console.log(square);
console.log("Square Area: " + square.area());
console.log("Square Perimeter: " + square.perimeter());

let circle = new Circle(3);
console.log(circle);
console.log("Circle Area: " + circle.area());
console.log("Circle Perimeter: " + circle.perimeter());

let cube = new Cube(2);
console.log(cube);
console.log("Cube Area: " + cube.area());
console.log("Cube Volume: " + cube.volume());
console.log("Cube Perimeter: " + cube.perimeter());

let cylinder = new Cylinder(2, 5);
console.log(cylinder);
console.log("Cylinder Area: " + cylinder.area());
console.log("Cylinder Volume: " + cylinder.volume());
console.log("Cylinder Perimeter: " + cylinder.perimeter());

let shape: Shape;

shape = new Rectangle(5, 3);
console.log(shape);
console.log("Area: " + shape.area());
console.log("Perimeter: " + shape.perimeter());

shape = new Square(15);
console.log(shape);

shape = new Circle(7);
console.log(shape);

shape = new Cube(4);
console.log(shape);

shape = new Cylinder(3, 6);
console.log(shape);

let shapes: Shape[] = [rectangle, square, circle, cube, cylinder];
shapes.forEach(shape => {
    console.log("Shape: " + shape.constructor.name);    
});