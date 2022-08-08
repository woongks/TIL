```JavaScript

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log('draw');
  }
};

```

the code above is the object literal syntax.

properties are used to hold values.
methods, functions show some logic.

how to make another circle?

we can copy and paste the code above.

but it is not efficient.

object literal syntax is not a good way to create an object and duplicate it. (If the object has a behavior)

> When an object has more than one method, we say that it has a behavior.

what is a good way to do then?

use a factory, or constructor function.

```JavaScript
// factory function

function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw')
    }
  };
}

const circle = createCircle(1)
circle.draw();

// constructor function

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle(1);
```

what happens if we call constructor method for circle and another?

circle will have Object() called, and another will have Circle(radius) called.

when we make something using an object literal, it is the same as using new Object(), therefore calling built-in constructor Object().

conclusion: every object has a constructor property.

<br /><br />

A function is an object in javascript.
Try Circle.constructor, it will show Function()

<br /><br />

value types vs. reference types
(primitive)

value types

> Number  
> String  
> Boolean  
> Symbol
> undefined
> null

**primitives** are copied by their values.

<br /><br />

reference types

> Object
> Function
> Array

**objects** are copied by their reference.
<br /><br />

when you assign reference types,

```JavaScript
let x = {value: 10};
let y = x;
x.value = 20;

console.log(x) // {value: 20}
console.log(y)  // {value: 20}
```

addresses of the place will be copied. So you can say that x and y are pointing to the same memory.

getter, setter

```JavaScript

Object.defineProperty(this, 'defaultLocation', {
  get: function() {
    return defaultLocation;
  },
  set: function(value) {
    if (!value.x || !value.y)
      throw new Error('invalid location')
    defaultLocation = value;
  }
});

```
