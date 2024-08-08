
const user = {id:1, name: 'gorib aamir', job:'actor'}
// javascript object notation(json)
// stringify string e convert kore shob
const stringified = JSON.stringify(user)
console.log(user)
console.log(stringified)
// { id: 1, name: 'gorib aamir', job: 'actor' }        JS
// {"id":1,"name":"gorib aamir","job":"actor"}         JSON

const parse = JSON.parse(stringified)
console.log(parse)