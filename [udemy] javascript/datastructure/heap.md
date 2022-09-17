### Heap

heap or binary heap is basically a tree structure.

In technical terms we call it a complete binary tree.

We can say a tree is a complete binary tree when we can express it using an array (without blank spaces).

complete binary tree or heap has a root. Each node has two children. Last node of the tree can have 0~2 children.

when adding a child node, if both left and right sides are empty, left should be filled first, then right.

Last node can have no child at all or one or two because we can still express the tree with an array.

There are many types of heap. Most fundamental ones are min heap and max heap.

Min heaps are heaps where value of a root node is minumum amongst all values. Also, each node should have children that have greater values.

Max heaps are of the opposite. Root node contains a maximum value. If ever a node has a child or children, they should have a lower value than its or their parent node.
