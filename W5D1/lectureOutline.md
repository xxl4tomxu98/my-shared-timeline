### 0. What Even is Object Oriented Programming?

- Commonly referred to as O.O.P., Object Oriented Programming is a set of concepts and techniques used when constructing programs. The three teqniques or pillars that make up OOP are: 
    i. Encapsulation 
    ii. inheritance 
    iii. polymorphism

### i. ENCAPSULATION: enclose something as if in a "capsule"

- Encapsulation puts the behavior and data together behind methods that hide the specific implementation so that code that uses it doesn't need to worry about the details of it.


### ii. INHERITANCE: get it from your fam

- In the same way that biology passes traits of a parent organism to its descendants, so does object-oriented programming.

- JS supports a prototypal inheritance methodoloy, more broadly encompased and known as **IMPLEMENTATION INHERITANCE**.

- Terminology:
    - For the sake of brevity, you should understand that whenever you  read the phrase "parent class", that also means "prototype".
    - "Super class" is another name for "parent class".
    - "Base class" is another name for "parent class".
    - Sometimes, you will see "inheritance" referred to as "subtyping".


### iii. POLYMORPHISM: treat many things the same

- Treat an object as if it were an instance of one of its parent classes.
- A fancy word for being able to use the methods of a parent class on an object of a child class.

- ex: 
```js
        class Employee {
            // employee class here

            getSalary(){
                // gets salary
            }
        }
        class Manager extends Employee {
            // employee class here

            // although you don't see it, this class can also call the `getSalary()`
            // method. This is because of ineritance. 
            // Thus, I can call `getSalary()` on BOTH an instance of an Employee and // Manager.
        }

        const mashu = new Manager();
        const ta = new Employee();

        // I can treat `mashu` and `ta` the same
        mashu.getSalary()
        ta.getSalary()
```

### Object Oriented Design Principles aka S.O.L.I.D.

    1. -> Single-Responsibility Principle****

    2. -> The Barbara Liskov Substitution Principle****
        -  Given a parent class with a method on it, any class that inherits from this parent class, has access and ability to override the inherited methods. The Barbara Liskov Principal says that in the case of overriding a method, no unexpected behavior is allowed.


### Single Responsibility Principle 
    - srp-bad.js vs srp-good.js


### Law of Demeter

- A method of an object can only invoke the methods (or use the properties) of the following kinds of objects:

    - Methods on the object itself
    - Any of the objects passed in as parameters to the method
    - And object created in the method
    - Any values stored in the instance variables of the object
    - Any values stored in global variables

- OK TO BREAK when you can't avoid it