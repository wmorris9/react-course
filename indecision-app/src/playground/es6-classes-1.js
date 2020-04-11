class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi! My name is ${this.name}.`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    getDescription() {
        let description = super.getDescription()
        return !!this.major ? `${description} My major is ${this.major}.` : description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        return !!this.homeLocation ? `${super.getGreeting()} I am visiting from ${this.homeLocation}!` : super.getGreeting()
    }
}

const me = new Traveller('Weylin Morris', 23, 'Rexburg')
const cierra = new Student('Cierra Morris', 21, 'Web Development')

console.log(me.getGreeting())
console.log(cierra.getDescription())