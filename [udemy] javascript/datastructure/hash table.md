hash tables are commonly used because of the speed.

In JS, Objects and Maps are hash tables.

you need hash functions to implement a hash table.

what makes a good hash?

1. Fast (constant time)
2. uniformly distributes values
3. deterministic (same value for the same input)

```JavaScript

//simple hash function

function hash(key, arrayLen) {
  let total =0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}
```

hash functions will have collisions for sure.

there are many strategies for dealing with collisions.

two are the following:

1. separate chaining
   > at each index, store values using a more sophisticated data structure (array etc).
2. linear probing
   > when we find a collision, we search through the array to find the next empty slot.
