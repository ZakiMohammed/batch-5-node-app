const person = {
    id: 1,
    firstName: 'Allen',
    lastName: 'Green',
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    },
    age: 22,
    salary: 12000,
    hobbies: ['Sports', 'Singing', 'Dancing']
}

console.log(person.age)

person.age = 23
person['salary'] = 13000

console.log(person['salary'])

console.log(person.fullName())