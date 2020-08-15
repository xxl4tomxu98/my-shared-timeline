# W9D3 - CSS Layouts + Responsive Design
>



## `Agenda:`
1. Media Queries
1. The Box Model
1. Padding, Border, Margin
1. Positioning
1. Flex-box Froggy
1. Grid Garden


---


## `Media Queries:` 

> A CSS feature that allows us to give conditions for certain styling rules, e.g. determining the width of some HTML elements depending on the size of a device's screen a.k.a  _viewport_.


---

```css
 /* index.css */

div {
    color: black;
    font-size: 12px;
}

@media screen and (min-width: 700px) {
  /* styles defined here will apply only
   when the browser window has a minimum width
   of 700 pixels. 
   I.e. any screen with a width > 700px will 
   have styles defined in this media query. */
    div {
        color: white;
        font-size: 20px;
    }
   /*  ~*~::-tHiz iz rEsp0n$ivE dEsiGN-::~*~  */
}
```
---

* Media queries can target _**types of media:**_
    - `Print` 
    - `Sreen` 
    - `Speech` 
    - or target all with `All`

```css
@media all and (min-width: 700px) {
    div {
        color: white;
        font-size: 20px;
    }
}
```
---
## Combine Media Queries with `AND` & `OR`:

```css
html {
    background-color: white;
    color: #333333;
}

@media (min-width: 301px) and (max-width: 600px) {
    html {
        background-color: #333333;
        color: white;
    }
}
```
## Change Styleing Based on `Screen Orientation`:

```css
body {
  font-size: 14px;
  display: flex;
}

@media (min-width: 1600px) {
  body {
    font-size: 18px;
  }
}

@media (max-width: 360px) {
  body {
    font-size: 10px;
  }
}

@media (orientation: landscape) {
  flex-direction: row;
}

@media (orientation: portrait) {
  flex-direction: column;
}
```
⚠️ >>> _Pop Quiz, what is the above code doing?_

---
----
---
## `The Box Model` 
> **TL;DR** a different way to calculate & apply height and width. 

- Amazon Delivery Box
- Puffer Jacket Analogy

```css
.box {
  /* box-sizing: border-box; */
  border:  10px solid black; 
  margin:  50px;  
  padding: 25px;  
  width:   250px; /* = content */
  height:  100px; /* = content */
}
```
```css
.box {
  box-sizing: border-box; /*changes h+w calc*/
  border:  10px solid black; 
  margin:  50px;  
  padding: 25px;  
  width:   ?; /* = content + padding + border */
  height:  ?; /* = content + padding + border */
}
```
---
## `Positioning:`

1. **Static** 
    - `Default` positioning of an element.

1. **Absolute**
    - Element *removed* from the page flow.
    - Positioned relative to `ancestor` 

1. **Fixed**
    - Element *removed* from the page flow.
    - Positioned reltive to `the document` itself.

1. **Relative**
    - Element can be offset from `original position`.

1. **Sticky**
    - Nav bar that stays in one place after scrolling.

---

## `Positioning Demo`
---

## `Flexbox:`
- Reading
- Video 
- Properties on flex 
- Container:
    - `flex-direction`
    - `flex-wrap`
    - `justify-content`
    - `align-items`
- Children
    - `Order`
    - `flex-grow`, `flex-shrink`, `flex-basis`
```css
body {
    /* container */
    display: flex;
    flex-flow: row wrap;
}

.my-divs {
    /* flexed child */
    order: 1;
}

```
- Flexbox Froggy 🐸

---

## `CSS Grid:`
- Reading 
- Video 

```css
.container {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(4, 25%);
    grid-gap: 30px 15px;
}
```
- Grid garden 🌱

---
> Flexbox is best used and intended for one dimensional flexing. i.e. either organizing elements into a column or a row. 

>Grid layout is best used for two dimentional layouts. i.e. a situation where you want multiple rows and columns. (like a game board, new york times, )

---

###### THANK YOU! 
