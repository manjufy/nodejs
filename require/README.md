# Require Example

Node uses two core modules for managing module dependencies

- The `require` module; no need to `require('require')`
- The `module` module; no need to `require('module')`

```
require > node
> module

Module {
  id: '<repl>',
  exports: {},
  parent: undefined,
  filename: null,
  loaded: false,
  children: [],
  paths:
   [ ....
     '/node_modules',
     ....
     '/usr/local/Cellar/node/10.8.0/lib/node' ] }
```

REPL - Read-Eval-Print-Loop

https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8