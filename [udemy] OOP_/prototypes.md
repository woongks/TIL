### prototypical inheritance?

every object in javascript has a prototype. (there is a special case though)

when calling a certain method, javascript engine looks in to an object first, and if it cannot find it, it will look in to the object's prototype for the method.

### multi-level inheritance?

array in javascript is a multi-level inheritance.

array prototype inherits object prototype.

function prototype also inherits object prototype.

### Property descriptors?

```JavaScript

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descripyor) // configurable: true, enumerable: false, writable: true
```

configurable -> you can remove the method.
enumerable -> you can iterate over this method.
writable -> you can overwrite this method.

```JavaScript
Object.defineProperty(person, 'name', {
  writable: false,
  enumerable: false
})

// person.name is unchangable
```

### \_\_proto\_\_ and prototype

circle.\_\_proto\_\_ will show its parent's prototype. ( Circle base)
Circle.prototype will show its own prototype. ( Circle base)

adding prototype function

```JavaScript

Circle.prototype.draw = function() {
  console.log('draw')
}
```

don't modify objects you don't own.
