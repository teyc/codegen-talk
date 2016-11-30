Source code generation with Gulp
---------------------------------

Source code generation was a technique that was
reasonably popular back in the 90s for the creation
of N-Tier program, but has 
largely been subsumed by tools that generate
proxies automatically on the client side, and ORMs
on the server-side. Additionally, techniques like
subclassing is reasonably effective in keeping the
codebase tight.

Another popular use of code generation is the
generation of state machines from source code.
Again, improvements in programming languages 
with constructs like async/await in C# and Javascript
mean these are less useful today.

However, they still retain some promise in the 
field of model driven engineering. The basic thrust
of this is that large parts of a software is best 
written in a machine-like manner to improve readability
and consistency. Code-generation ensures that consistency
is maintained in large teams. As new ideas are introduced
into the source code template, engineers will have to
inspect the impact of these changes on all the files.
While this sounds like hard work -- and it is. Over time,
it ensures the entire code base is sound and consistently
structured as if it were all written at the same time 
in the recent past.

Exercises
---------------

1. Generates server.cs and client.js in dist

   $ gulp --gulpfile gulpfile-01.js

2. Finds custom sections and replaces them with
   custom code




