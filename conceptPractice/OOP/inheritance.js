//create a class named person and give it a constructor and a method
class Person{
    name;

    constructor(name) {
        this.name = name;
    }
    introduceSelf(){
        console.log(`Hi!, I'm ${this.name}`);
    }
}
//INHERITANCE DEMONSTRATION
//This creates a professor class inhering features from the  Parent class
class Professor extends Person{
    teaches;//give a new property called teaches
//create a constructor and include the fi
    constructor(name,teaches){
        //we use super so that it can take the name property from the superclass
        super(name) = name;
        this.teaches = teaches;
    }
    introduceSelf(){
        console.log(`I am ${this.name} and I will be teaching ${this.teaches}.`)
    }
//create a new method to make the generation of grades 
    grade(paper){
        const grade = Math.floor(Math.random()* (5-1)+1);
        console.log(grade);
    }
}

//now create a professor object
const walter = new Professor("Walter","Statistics");
    walter.introduceSelf();

    walter.grade("my paper");

    //Above, the walter instance of the class has inherited the name property of the person class 




//ENCAPSULATION
//create a student class with the year being private
class Student extends Person{
    #year;

    constructor(name,year){
        super(name);
        //the "#" there signifies that it is a private data property
        this.#year = year;
    }

    introduceSelf(){
        console.log(`Hi,I am ${this.name} and I am in ${this.#year}`)
    }

    canStudyCs(){
        return this.#year === 2;

    }
}

//now that we have the student class , we can create a student object and use the private property inside only.
const emelia = new Student("Emelia",2);
emelia.introduceSelf();
emelia.canStudyCs();

/*if we try to  do this
 emelia.#year
 we will get a syntax error because the  private year is being used outside the class we created*/