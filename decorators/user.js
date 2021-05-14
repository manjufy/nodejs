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
console.log(user.getFullName());

/**
 * Problem with this is that anybody can modify getFullName.
 * see user-hacked.js
 */