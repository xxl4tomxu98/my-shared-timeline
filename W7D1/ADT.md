# W7D3: _Lists, Stacks, and Queues_

## `ADTs - Abstract Data Types`

>In computer science, an abstract data type (ADT) is a mathematical model for data types. An abstract data type is defined by its behavior (semantics) from the point of view of a user, of the data, specifically in terms of possible values, possible operations on data of this type, and the behavior of these operations. This mathematical model contrasts with data structures, which are concrete representations of data, and are the point of view of an implementer, not a user.
>Formally, an ADT may be defined as a "class of objects whose logical behavior is defined by a set of values and a set of operations"

###### *- Wikipedia*

[Linked] Lists, Stacks, and Queues are examples of ADTs.  Other important ADTs that you will encounter are *Sets*, *Multi-Sets* (aka *Bags*), *Maps*, and *Multi-Maps*.  
As JavaScript **arrays** can be used to implement ADTS, so can **JavaScript objects**. Know how to do both. 

---

## `Overview`

The topics for today are formal concepts from Computer Science - these relate to:

* Data Structures
* Algorithms

Data Structures are *the structure of data*.  We know the concrete data structures *Array*, *Object*, and *String* and *classes* in JS.  But the idea of an *Abstract Data Type* (**ADT**) is about how we can talk about data organization in isolation from the way any particular language implements them.

Sets - for instance - are unordered collections of unique values.  A set has methods to *add*, *remove*, and *query* elements.

The video provides an example of implmenting a *Set* via an *Array*, but he also mentions that JS has added a *Set* class as of 2016.

Similarly, a *Map* is an ADT that maps a unique collection of keys to a collection of (not necessicarily unique) values.  Maps typically implement *get*, *set* and *delete* methods.

### `Why Do These Matter?`

**Different types of storing data have different time and space complexity behavior**. Developers chose an ADT that is optimized for the problem to be solved, and then worry about which implementation to use (or develop) once the ADT has been identified. All of this matters more for larger data sets (and less for smaller ones).

The video mentions, that typically a Stack or Queue will `throw` an `Error` if an attempt is made to `pop` from an empty Stack or `dequeue` from an empty Queue.  (In today's project work this is generally *not* the expected behavior - look at the `spec` tests to determine what behavior is expected from your classes in these cases)

The video also discusses the *List* type, which allows much more flexible access than either Stacks or Queues.  He mentions that the JS Array type is a convenient structure to use to implement a List.  He also points out that the JS Array type can be resized as needed without effort by the programmer, in contrast to array types in many other programming languages.  (Python Lists are analogous to JavaScript Arrays, and do not require any explicit management - but like JS Arrays, this also means that the programmer is at a remove from the very real underlying complexity that still exists when an array has to be reallocated)

---
## `0. Linked List`

A **Linked List** is a data structure that represents a linear sequence of *nodes* that has three properties:

1. `head`: The first node in the list
2. `tail`: The last node in the list
3. `length`: The number of nodes in the list

List **Nodes** have particular properties:

* `value`: The value associated with this node
* `next`: The next node in the list
* `previous`: in doubly-linked lists, the prior node in the list


Linked lists contain ordered data, like an array.  The difference lies in how these two are implemented; in an array the elements are logically (but not necessicarily physically!) *adjacent*; in a linked list they are isolated in distinct nodes that are connected by a chain of *references*.

![linked-list-vs-array](https://s3-us-west-2.amazonaws.com/ib-assessment-tests/problem_images/array-vs-ll.png)

While an array can be indexed in O(1) time, a linked list will have a time complexity of O(n).

Often when you code out ADTs you will end up creating two classes that work together; a **Node class**  that represents a vertices (or point) of the ADT, and an owner class - generically called a *Container* - that will manage a collection of Nodes.

The homework mentions singly and doubly-linked lists, as well as circularly linked lists. There are different types of linked lists, it's good to be know this, don't worry too much on being comfortable implementing these other types, first focus on learning a singularly linked list. In the job search part of the curriculum, you will likely revisit this day-- that can be when to focus on those.

The homework also mentions typical generic operations that are implemented on linked lists: *Insertion*, *Deletion*, *Search*, *Read*/*Write Access* to a selected node, and *Size* (or length) on the ADT itself.

As mentioned in the homework, the time complexity of **insertion** and **deletion** operations on a **linked list** is **O(1)**, while the search and access operations are **O(n)**. Compare these time complexities to Arrays.  (why?)  The space complexity for linked lists is **O(n)** in general.

---
## `1. Queues`

![queue-diagram](https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1200px-Data_Queue.svg.png)

![human-queue](https://mbcmc27n7s3en3e22s6bb816-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Queue_queuing_upirloko89_i_opt-1.jpg)

Queues are *First In First Out* (**FIFO**).

A Queue is a data structure with a front and a back, like a line that you might find yourself standing in.  And as with a line you might stand in, generally one end is where new Nodes or Values are **added (the back)** and the other is where the oldest Nodes or Values are removed (the front) i.e. FIFO.  (Also as in real life, there are reasons why values are pulled from the back - "can't wait this long - I'm giving up!" or added to the front - "this is an EMERGENCY - do it FIRST!" - but these are not the typical use-cases)

As mentioned in the homework, you can use **Array#push and Array#shift** in JavaScript to implement a simple Queue data structure.  (Can you think of another pair of Array methods you could use?)

Both Stacks and Queues have a length.  

A **Queue**, `enqueue`, `dequeue`, and (yes, you guesed it!) `size`.  
(In the video a `peek` method is mentioned for Stacks and Queues, to peek at the Node or Value that is on top of a Stack, or the head of a Queue)

If Stacks and Queues are implemented on top of a Linked List, then it should not be surprising that their time complexity behaviors are the same as those of linked lists; **O(1)** for insertion and deletion, **O(n)** for access and searches.  As with the underlying list ADT, the space complexity for both Stacks and Queues is proportional to the number of nodes, so **O(n)**.

Queues are often used when tasks or jobs are scheduled; the text mentions print queues, as well as the lobbies of MPGs.  At the heart of every OS is a job scheduler, and both the Node and Browser JS environment use a task queue to schedule asynchronous execution.

---

## `2. Stacks`

![stack](https://pbs.twimg.com/media/DWqfza8U0AA-B1z.jpg)

Stacks are *Last In First Out* (**LIFO**) data structures; 

Stacks are said to have a **'top'**; Nodes or Values (depending on implementation) are pushed onto the top, and **popped off** to remove them.  (The JS Array#push and Array#pop methods can be used to implement a stack).  While there is a 'bottom' to the stack, the bottom node isn't regarded as anything special besides the last item that can be popped.  So a Stack classically has only one active end.

Both Stacks and Queues have a length, and in the projects you will implement these values.  

The whole point of these ADTs is that they support insertions and deletions at the expected places in **O(1)** time.  (Whereas counting the number of items in the list requires...?)  Note also that keeping track of the length of an ADT container by updating an attribute allows us to report the length in **O(1)** time.

If a Stack or Queue is implemented via a Node Class (as you will do in today's projects), the Node will require both a *value* and a *next* property.

For consideration 
- (a) If there is a *next* property but not a *previous* property, what sort of list is being used to implement a Stack or Queue?  

Cannonical operations on a **Stack** are typically `push`, `pop`, and `size`.  

Both Stacks and Queues are used everywhere ADTs; 
the 'call stack' when running program is an example of a Stack, as is the command history in the shell (or Node), and Browser History functionallity.  

## ADTs in Review

* You should know in general what a Linked-List, Stack, Queue, Set, and Map are.

* For the Linked-List, Stack, and Queue ADTs, you should be familiar with their typical operations, and know what their typical time and space complexities are.
