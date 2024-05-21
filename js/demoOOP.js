class Vector2{
    constructor(x,y=0){
        this.x=x;
        this.y=y;
    }

    add(v){
        // this.x+=v.x;
        // this.y+=v.y;
        return new Vector2(this.x+v.x, this.y+v.y);
    }

    getString(){
        //return "("+this.x+" ,"+this.y+")";
        return `(${this.x}, ${this.y})`;
    }
}

const v1=new Vector2(1,1);
console.log(v1.x)

const v2=new Vector2(3,3);
console.log(v1.add(v2))
console.log(v1);

const v3=new Vector2(3);
console.log(v3.getString())

class Body2D{
    constructor(x,y,name){
        this.pos=new Vector2(x,y);
        this.name=name;
    }

    // fake
    draw(){
        //return "I am "+this.name+" and my position is ("
        return `I am a ${this.name} and my position is ${this.pos.getString()}`;
    }

    area(){

    }
}

class Rectangle extends Body2D{
    constructor(x,y,a,b){
        super(x,y,"RECTANGLE");
        this.a=a;
        this.b=b;
    }

    draw(){
        return super.draw()+ ` and my sides are ${this.a} and ${this.b}`;
    }

    area(){
        return this.a*this.b;
    }
}

const r1=new Rectangle(3,4,5,6);
console.log(r1.draw());

class Square extends Rectangle{
    constructor(x,y,a){
        super(x,y,a,a);
        this.name='SQUARE';
    }

    draw(){
        return super.draw()+ ' (yes, my sides are equal)';
    }
}

const s1=new Square(2,3,4);
console.log(s1.draw())


const objArray = [
	new Square(1, 1, 2),
	new Rectangle(12, 3, 4, 5),
	new Square(1, 1, 2),
	new Rectangle(12, 3, 9, 5),
	new Square(1, 1, 20),
	new Rectangle(12, 3, 7, 5),
];

console.log(objArray.map(o=>o.area()))