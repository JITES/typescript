interface IPerson {
     id: number
     name: string
    register(): string
}

class Person implements IPerson {
     id: number
     name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const jack = new Person(1, 'Jack')

// sub-classes
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Andy', 'Admin')

