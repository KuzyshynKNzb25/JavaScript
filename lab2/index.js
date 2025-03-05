let car1 = new Object();
car1.color = "yellow";
car1.maxSpeed = 100;
driver = new Object();
driver.name = "Кузишин Дмитро";
driver.category = "C";
limitations = "personal limitations";
accidents_number = "number of accidents"

driver[limitations] = "No driving at night";
car1.driver = driver;
car1.tuning = true;
car1[accidents_number] = 0;

let car2 = {
    color : "black",
    maxSpeed : 70,
    driver:{
        name : "Кузишин Дмитро", 
        category : "B",
        "personal limitations" : null
    },
    tuning: false, 
    "number of accidents":2, 
    drive: function(){
        console.log("I can drive anytime");
    },
};

car1.drive = function(){
    console.log("I am not driving at night  .");
};
car1.drive();
car2.drive();
class Truck{
    constructor(color, weight, avgSpeed, brand, model){
        this.color = color;
        this.weight = weight;
        this.avgSpeed = avgSpeed;
        this.brand = brand;
        this.model = model;
        this.trip = function(){
            if(!driver){
                console.log("No driver assigned");
                return;
            }
            let check;
            if(this.driver.nightDriving){
                check = "drives at night";
            }
            else {
                check = "does not drive at night"
            }
            console.log(`Driver ${this.driver.name}\n${check}\nand has ${this.driver.experience} years of experience`);

            console.log();
        }
    }

}
    Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
        this.driver = {
            name: name,
            nightDriving: nightDriving,
            experience: experience
        };
    }; 

    const truck1 = new Truck("Black", 6000, 68, "MAN", "v800");
    const truck2 = new Truck("Grey", 7500, 84, "SCANIA", "v800");
    truck1.AssignDriver("Kuzyshyn", true, 8);
    truck2.AssignDriver("Dmytro", false, 0);
    truck1.trip();
    truck2.trip();

class Square{
    constructor(a){
        this.a = a;
    }
    

    length(){
        if(!this.a){
            console.log("sides are underfined");
            return;
        }
        console.log(`Sum of all sides: ${this.a*4}`);
    }

    square(){
        if(!this.a){
            console.log("side a is underfined");
            return;
        }
        console.log(`Square: ${this.a*this.a}`);
    }

    info(){
        console.log(`Side a: ${this.a}\nSide b: ${this.a}\nSide c: ${this.a}\nSide d: ${this.a}`);
        console.log("Angle a:90\nAngle b:90\nAngle c:90\nAngle d:90\n");
        this.length();
        this.square();
    }

    static help = function(){
        console.log("It's a square, that figure has all sides equal");
    }

}

class Rectangle extends Square{ 
    constructor(a, b){
        super(a);
        this.b = b;
    }

    static help = function(){
        console.log("It's a rectangle, that figure has all angles equal to 90 degrees");
    }



    length(){
        if(!this.a || !this.b){
            console.log("sides are underfined");
            return;
        }
        console.log(`Sum of all sides: ${this.a *2 +this.b*2} `);
    }

    square(){
        if(!this.a || !this.b){
            console.log("side a or b is underfined");
            return;
        }
        console.log(`Square: ${this.a*this.b}`) ;
    }

    info(){
        console.log(`Side a: ${this.a}\nSide b: ${this.b}\nSide c: ${this.a}\nSide d: ${this.b}`);
        console.log("Angle a:90\nAngle b:90\nAngle c:90\nAngle d:90\n");
        this.length();
        this.square();
    }
}

class Rhombus extends Square{
    constructor(a, alpha, beta){
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help = function(){
        console.log("It's a rhombus, that figure has all sides equal");
    }

    length(){
        if(!this.a){
            console.log("sides are underfined");
            return;
        }
        console.log(`Sum of all sides:${this.a*4}`);
        
    }

    #localCounter(){
        let halfOfAlpha = this.alpha*Math.PI/360;
        let halfOfDiameter1 = this.a*Math.sin(halfOfAlpha);
        let halfOfDiameter2 = Math.sqrt(this.a*this.a-halfOfDiameter1*halfOfDiameter1);
        return 2*halfOfDiameter1*halfOfDiameter2;
    }

    square(){
        if(!this.a || !this.alpha || !this.beta){
            console.log("side a or angles are underfined");
            return;
        }        
        console.log(`Square: ${this.#localCounter()}`);        
    }

    info(){
        console.log(`Side a: ${this.a}\nSide b: ${this.a}\nSide c: ${this.a}\nSide d: ${this.a}` );
        console.log(`Angle a:${this.alpha}\nAngle b:${this.beta}\nAngle c:${this.alpha}\nAngle d:${this.beta}\n`);
        this.length();
        this.square();
    }

    get a(){
        return this._a;
    }

    get alpha(){
        return this._alpha;
    }

    get beta(){
        return this._beta;
    }

    set a(sideSize){
        this._a = sideSize;
    }

    set alpha(angleA){
        this._alpha = angleA;
    }

    set beta(angleB){
        this._beta = angleB;
    }
}

class Parallelogram extends Rectangle{
    constructor(a, b, alpha, beta){
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help = function(){
        console.log("It's a paralelogram, that figure has all sides and angles different ");
    }

    length(){
        if(!this.a || !this.b){
            console.log("sides are underfined");
            return;
        }
        console.log(`Sum of all sides:${this.a*2+this.b*2}`)        
    }

    #localCounter(){
        if(this.beta > 90){
            this.beta -=90;
        }
        const inRadians = this.beta*Math.PI/180;
        const height = this.a * Math.sin(inRadians);
        return height*this.a;
    }

    square(){
        if(!this.a || !this.alpha || !this.beta || !this.b){
            console.log("sides a or angles are underfined");
            return;
        }        
        console.log(`Square: ${this.#localCounter()}`);        
    }

    info(){
        console.log(`Side a: ${this.a}\nSide b: ${this.b}\nSide c: ${this.a}\nSide d: ${this.b}` );
        console.log(`Angle a:${this.alpha}\nAngle b:${this.beta}\nAngle c:${this.alpha}\nAngle d:${this.beta}\n`);
        this.length();
        this.square();
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();
const square = new Square(10);
const rectangle = new Rectangle(10, 25);
const rhombus = new Rhombus(10, 60,120);
const paralelogram = new Parallelogram(13, 40, 100, 80);
square.info();
rectangle.info();
rhombus.info();
paralelogram.info();





function Triangular(a = 3, b = 4, c = 5){
    return {a, b, c};
}

const triangle1 = Triangular(5,10,19);
console.log(triangle1);
const triangle2 = Triangular(15,140,19);
console.log(triangle2);
const triangle3 = Triangular();
console.log(triangle3);

function PiMultiplier(num){
    const result = function(num){
        return Math.PI * num;
    }
    return result(num);
}
console.log(PiMultiplier(2)) ;
console.log(PiMultiplier(2/3)) ;
console.log(PiMultiplier(0.5)) ;

function Painter(color) {
    return function (obj) {
        if (obj.type) {
            console.log(`Color: ${color}, Type: ${obj.type}`);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}

function Painter(color) {
    return function (obj) {
        if (obj.type) {
            console.log(`color: ${color}\n type: ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

const PaintBlue = Painter("Blue");
const PaintRed = Painter("Red");
const PaintYellow = Painter("Yellow");

obj1 = {
    maxSpeed:280,
    type: "Sportcar",
    color: "magenta",
};

obj2 = {    
    type: "Truck",
    "avg speed":90,
    "load capacity": 2400,
};

obj3 = {    
    maxSpeed:180,
    color: "purple",
    isCar: true,
};

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);
