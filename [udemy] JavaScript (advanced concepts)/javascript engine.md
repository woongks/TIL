how does the javascript engine work?

we give it a javascript file.

First, it will do something called lexical analysis. It breaks the code into something called tokens, to identify their meanings.

The tokens are formed into an AST(Abstract Syntax Tree).

Initially, the code from AST will go through the interpreter(V8 calls it ignition). It will spit out bytecode.

while interpreting, profiler (monitor) will watch the code and see if there is a way to optimize it (like loops). If some lines of code can be optimized, they will be sent to the compiler or a JIT compiler(V8 calls it turbofan).

JIT compiler?

> mix of compiler and interpreter.

the compiler will spit out optimized machine code, and it will replace the respective sections of byte code.
