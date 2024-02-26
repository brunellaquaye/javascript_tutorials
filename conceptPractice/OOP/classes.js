//create a student class and create new objects using constructors

class Student{
    name;
    age;
    id;
    level;

    constructor(name, age, id, level){
        this.name = name;
        this.age = age;
        this.id = id;
        this.level = level;
}
//this is a method that uses the name property of the object
    introduceSelf(){
        console.log(`Hi!, I'm ${this.name}`);
    }}