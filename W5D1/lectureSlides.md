# W5D3

### Object-Oriented Programming

![UML diagram](https://lkrnac.net/wp-stuff/uploads/2014/04/animals-class-diagram.png)

---

## Lecture Outline

1. What is OOP?
4. The Three Pillars of OOP
    1. Encapsulation - _encapsulate_
    3. Polymorphism - _treat the same_
    4. Inheritance - _ancestors_
5. OOP Design Patterns - AKA "SOLID" 
	- **S** ingle Responsibility Principle
	- **O** pen-Close Principle
	- **L** iskov Substitution Principle
	- **I** nterface Segregation Principle
	- **D** ependency Inversion Principle
  
---

## What Even is OOP?

> >Commonly referred to as O.O.P., Object Oriented Programming is a set of concepts and techniques used when constructing programs. The three teqniques or pillars that make up OOP are: 

    - i. Encapsulation 
    - ii. inheritance 
    - iii. polymorphism

> OOP is a set of techniques used to prevent **code complexity**... ->
---

## OOP Helps To Controls Complexity

+ Locates related code in the same place
+ Limits inter-dependencies in code
+ Reduces repeated code (DRY)
+ Intuitive because it mirrors physical reality

---


> Controlling complexity is the essence of computer programming.
>
> &mdash; _Brian Kernighan_

![Brian Kernighan Photo](http://2.bp.blogspot.com/-vjmojesfTK0/UwjkPF_nLLI/AAAAAAAACHY/7cTOimc_e5g/s1600/Brian+Kernighan.jpg)

Note:
You need code that's simple and easy to reason about in order to write and maintain it, but it still needs to perform complex functions that are often idiosyncratic and hard to reason about.

(Brian Kernighan is one of the foundational programmers of the 60's and 70's. He came up with the name "Unix" and co-authored the first book on C with Dennis Ritchie.)

---

## The 3 Principles of OOP

1. Encapsulation
3. Polymorphism
4. Inheritance

---

## The 4 Principles of OOP

1. => **Encapsulation** <=
3. Polymorphism
4. Inheritance

---

### Encapsulation

+ Encapsulation puts the behavior and data together behind methods that hide the specific implementation so that code that uses it doesn't need to worry about the details of it.

### Encapsulation Metaphor - a Cell

> + Everything you need to run a cell is right there together.
>+ Mitochondria aren't wandering around the body. There in one place where it's easy to find them.
>+ There's a boundary/interface (cell wall).

---

### Encapsulation Metaphor: a Cell

![Cell](https://www.morton-pub.com/sites/default/files/library_images/mpf0332.jpg)

---

## The 4 Principles of OOP

1. Encapsulation
3. => **Polymorphism** <=
4. Inheritance

---


### Polymorphism

+ A fancy word for **being able to use the methods of a parent class on an object of a child class**. AKA Objects with the same interface are interchangeable.
+ _Even if_ they're different classes.

---

```js
        class Employee {
            // employee class here
            getSalary(){
                // gets salary
            }
        };
        
        class Manager extends Employee {
         // although you don't see it, this class can also call the `getSalary()`
         // method. This is because of ineritance. 
         // Thus, I can call `getSalary()` on BOTH an instance of an Employee and 					 // Manager.
        };

        const boss = new Manager();
        const ta = new Employee();
        // I can treat `boss` and `ta` the same
        boss.getSalary()
        ta.getSalary()
```

---

## The 4 Principles of OOP

1. Encapsulation
3. Polymorphism
4. => **Inheritance** <=

---

### Inheritance

+ Keeps code DRY by letting you re-use class implementations
+ Overwrite or extend this implementation in the subclass
+ Very useful for _polymorphism_
    + Interchange different subclasses of a parent class.
+ Creates a hierarchy of classes

---
### Inheritance Cont.
SYNTAX `class SubClass extends SuperClass {}`

### superclass
a.k.a. parent class, base class

A class that is used as the basis for inheritance.

### subclass
a.k.a. child class

A class that inherits from a parent class.

Note:
+ sub classes 'inherit' all behavior from parent class
+ can add methods to subclass without changing parent
+ methods defined on subclass 'override' parent

---
### Inheritance Cont.

```js
        class Employee {
        
            getSalary(){ /*GETS  SALARY*/ };
            
            getName(){ /*GETS  SALARY*/ };
        };
        
        class Manager extends Employee {
        // What methods do I have access to here?
        };

```

---

## _The Single Responsibility Principle_

>>>>>> ## "Do one thing, do it right."

Note:
_DEMO: Good Invoice vs. Bad Invoice DEMO_

---

### DEMO: Good vs. Bad Invoice Code 

---

### Liskov Substitution Principle

+ Don't overwrite the interface! (AKA Inherited methods)
    + Okay to change the implementation (but stay DRY)
    + Okay to add to the interface
    + any type can be replaced by a subtype **without breaking** the subtype or type
    
+ Given a parent class with a method on it, any class that inherits from this parent class, has access and ability to override the inherited methods. The Barbara Liskov Principal says, **in the case of overriding a method, no unexpected behavior is allowed.**

Note:
+ The interface between the subclass and parent class is implicit, and can be very large if you aren't careful. Ruby especially makes this hard (implicit self, all global methods live in Object)
+ Liskov Substitution Principle - any type can be replaced by subtype without breaking

---

### Law of Demeter
- Helping to prevent tight coupling like below:

![](https://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/12/tangled-earbuds.jpg)
---

### Law of Demeter

> A method of an object can only invoke the methods (or use the properties) of the following kinds of objects:

	- Methods on the object itself
	- Any of the objects passed in as parameters to the method
	- Any object created in the method
	- Any values stored in the instance variables of the object
	- Any values stored in global variables
> Know when to break this law! Data Structures are exceptions! i.e. lists, key value pairs, and other JS DataTypes.
---


## Go practice OOP!

![Dog leaping over sheep](https://i.giphy.com/media/10E8Jj1TSQaul2/giphy.webp)
