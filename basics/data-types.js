// number, boolean, string, undefined, object, function

let x

const a = 10
const b = false
const c = 'Hello World'
const d = undefined
const e = { id: 1, name: 'Allen' }
const f = message => `Hello ${message}`
const g = [10, 30, 40]
const h = null

console.log(a, b, c, d, e, f('Foo World'), g, h, x)

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)
console.log(typeof f)
console.log(typeof g)
console.log(typeof h)
console.log(typeof x)