const HashTable = require('./lib')

const newHt = new HashTable()

newHt.setItem('bk101', 'Data structures algorithms')
newHt.setItem('bk108', 'Data analytics')
newHt.setItem('bk200', 'Cyber security')
newHt.setItem('bk259', 'Business Intelligence')
newHt.setItem('bk330', 'S/W Development')

console.log(newHt.getItem('bk101'))
console.log(newHt.getBucket())
