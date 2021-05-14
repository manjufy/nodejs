// return information of a function.

function funInfo (func) {
    return `Function ${func.name} accepts ${func.length} arguments`;
}

const add = (a, b) => a + b;
const hello = () => 'Hello World';

console.log('Add Info ->', funInfo(add));