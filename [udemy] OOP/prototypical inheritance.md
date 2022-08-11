let's say for example we have a type called Circle, and a type called Shape.

We want Circle to inherit Shape.

for now, Circle.prototype = Object and Shape.prototype = Object.

from

Circle.prototype = Object.create(Object.prototype)
(this is the current status)

we change this to

Circle.prototype = Object.create(Shape.prototype)

let c = new Circle(1)

now, c has Circle base, and inherits Shape base, which inherits Object base.

when you reset a prototype like this:

```JavaScript
Circle.prototype = Object.create(Shape.prototype)

```

also make sure to reset a constructor as well

```JavaScript
Circle.prototype.constructor = Circle;
```

super constructor

```JavaScript

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius
}

```

how to refactor the following code?

```JavaScript

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

```
