# what is a class?

class is a blueprint for creating objects with pre-defined properties and methods.

class in javascript is not fully object-oriented.

JS classes introduced in ES2015 are primarily symtactical sugar over js's existing prototype-based inheritance.

```JavaScript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let firstStudent = new Student ("kim", "sw");
let secondStudent = new Student ("lee, "hw");
```

The method to create new objects must be called constructor.
The class keyword creates a constant, so you cannot redefine it.

## instance method

is a function that belongs to a class

```JavaScript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    return `late ${this.tardies} times`
  }
}

let firstStudent = new Student ("kim", "sw");
let secondStudent = new Student ("lee, "hw");

console.log(firstStudent.fullName())
```

<br />< br />

## class method

```JavaScript
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
  }
  static EnrollStudents (...students) {
    return "Enrolling students"
  }


let firstStudent = new Student ("kim", "sw");
let secondStudent = new Student ("lee, "hw");

Student.enrollStudents([firstStudent, secondStudent]);

```

class method is not a method directly related to an individual instance.
It has to be called by calling a class.
It is used for doing something with 2 or more of instances from a same class.
