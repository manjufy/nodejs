# Decorators

    Decorator Pattern
    https://medium.com/better-programming/learn-about-decorators-in-javascript-d19c8795e8a

  A Property descriptor is a set of rules on an object property, like whether a property is writable or enumerable.
 
  A decorator is a JavaScript function that is used to modify class properties/methods or class itself.



## How to test with babel transpiler 

```
npx babel babel-test.js
```

```
npx babel user-readonly-decorator.js -o user-readonly-decorator.out.js
node user-readonly-decorator.out.js
```

### Reference

https://medium.com/jspoint/a-minimal-guide-to-ecmascript-decorators-55b70338215e