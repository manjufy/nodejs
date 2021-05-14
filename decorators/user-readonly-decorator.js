function readonly(target) {
    console.log('target', target);
    target.descriptor.writable = false;

    return target;
}

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @readonly
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let user = new User('John', 'Doe');

// try hack `getFullName`
User.prototype.getFullName = function () {
    return 'HACKED@';
}

console.log('User GetFullName ==>', user.getFullName());