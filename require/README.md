# Require Example

Node uses two core modules for managing module dependencies

- The `require` module; no need to `require('require')`
- The `module` module; no need to `require('module')`


### require

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
   [ ....,
     '/node_modules',
     ....,
     '/usr/local/Cellar/node/10.8.0/lib/node' ] }
```

```
require > echo "console.log('Module Manju');" > node_modules/manju.js
require > node
require > require('manju')
// manju.js exists in any of the other paths, priority would be given to the one inside the project directory
```

```
require > node
> require('manju-module')
=== Manju Module ===
{}

// index.js file will be used by default. However we can control the filename using `package.json`
```

#### require.resolve

allows one to resolve the module and not execute it

```
require > node
> require.resolve('manju-module')
'..../nodejs/require/node_modules/manju-module/start.js'
```

#### exports, module.exports, and synchronous loading

In any module, `exports` is a special object.

```
module.exports = function () {};
```

vs

```
exports = function ()
```

we can't do that because, `exports` variable inside each module is just a reference to `module.exports` which manages the exported properties. When we reassign the `exports` variable, that reference is lost and we would be introducing a new variable instead of changing the `module.exports` object

#### loaded attribute

The `module` module uses the `loaded` attribute to track which modules have been loaded (true value) and which modules are still being loaded (false value)

```
setImmediate(() => {
    console.log('The index.js module object is now loaded', module)
})
```

#### [Circular]

module a required in module b and module b required in module a?

```
require > node lib/module1.js
// Module1 is partially loaded here { a: 1 }
```

### File extensions

```
require > node
> require.extensions
{ '.js': [Function], '.json': [Function], '.node': [Function] }
// { '.js': [Function], '.json': [Function], '.node': [Function] }
```

REPL - Read-Eval-Print-Loop

https://medium.freecodecamp.org/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8