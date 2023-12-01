//complete this code
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }

  set age(age) {
    this.#age = age;
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name, age);
  }

  study = () => {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  constructor(name, age) {
    super(name, age);
  }

  teach = () => {
    console.log(`${this.name} is teaching`);
  }
}

const student = new Student("John", 20);
student.study(); // Output: John is studying
console.log(`Student's age: ${student.age}`); // Output: Student's age: 20

const teacher = new Teacher("Professor Smith", 35);
teacher.teach(); // Output: Professor Smith is teaching
console.log(`Teacher's age: ${teacher.age}`); // Output: Teacher's age: 35

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
