class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName () {
        return `${this.firstName} ${this.lastName}`
    }
}

let user = new User('John', 'Doe');

let userDescriptor = Object.getOwnPropertyDescriptor(User.prototype, 'getFullName');
console.log('User Descriptor', userDescriptor);

// hack `getFullName`

User.prototype.getFullName = function () {
    return 'HACKED@';
}

console.log('User GetFullName ==>', user.getFullName());