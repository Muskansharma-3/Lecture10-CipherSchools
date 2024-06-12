// OOP 

// Object Literal
// let person = {
//     firstName: "Muskan",
//     lastName: "Sharma",
//     getFullName: function () {
//         return `The name of the person is ${person.firstName} ${person.lastName}`;
//     },
//     phoneNumber: {
//         mobile: "12345",
//         landline: "67890"
//     },
// };
// console.log(person.getFullName());
// console.log(person.phoneNumber.landline);

// Object Constructor
// function person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// let person1 = new person("Muskan", "Sharma");
// let person2 = new person("Kanvi", "Sharma");
// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`);

// Object.create()
// const coder = {
//     isStudying: false,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I studying? ${this.isStudying}`);

//     }
// }
// const me = Object.create(coder);
// me.name = "Muskan Sharma";
// me.isStudying = true;
// me.printIntroduction();


// Classes
// class Vehicle {
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails() {
//         return `The name of the vehicle is ${this.name}`;
//     }
// }
// let v1 = new Vehicle("Creta", "Hyundai", "2500cc");
// let v2 = new Vehicle("Q5", "Audi", "3000cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());

// function Vehicle(name, maker, engine){
//     this.name=name;
//     this.maker=maker;
//     this.engine=engine;
// }
// Vehicle.prototype.getDetails = function(){
//     console.log(`The name of the vehicle is ${this.name}`);
// }
// let v1 = new Vehicle("Creta", "Hyundai", "2500cc");
// let v2 = new Vehicle("Q5", "Audi", "3000cc");
// console.log(v1.name);
// console.log(v2.maker);
// console.log(v1.getDetails());


// class Person {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     addAddress(newAddress){
//         this.address=newAddress;
//     }
//     getDetails(){
//         console.log(`Name is: ${this.name}, and address is: ${this.address}`);
//     }
// }
// let person1=new Person("Muskan", 101);
// person1.addAddress("Gurdaspur");
// person1.getDetails();


// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;

//         let getDetails_NoAccess = function () {
//             return `First name is: ${this.firstName} and Last name is: ${this.lastName}`;
//         }
//         this.getDetails_Access=function(){
//             return `First name is: ${this.firstName} and Last name is: ${this.lastName}`;
//         }
//     }
// }
// let person1 = new Person("Muskan", "Sharma");
// console.log(person1.firstName);
// console.log(person1.getDetails_NoAccess());
// console.log(person1.getDetails_Access());


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getDetails = function () {
        return `First name is: ${this.firstName} and Last name is: ${this.lastName}`;
    }
}
class Student extends Person{
    constructor(firstName, lastName, rollNo){
        super(firstName, lastName);
        this.rollNo = rollNo;
    }
    getDetails = function () {
        return `First name is: ${this.firstName} and Last name is: ${this.lastName}and the roll number is: ${this.rollNo}`;
    }
}
let person1 = new Person("Muskan", "Sharma");
console.log(person1.firstName);
console.log(person1.getDetails());
let student1 = new Student("Muskan", "Sharma", 41);
console.log(student1.getDetails());