// array and arrey methods

let names = ['jhon', 'mark', 'jane'];
let ages = [ 22, 33, 44, 55, 66];

console.log(names[0].toUpperCase());
console.log(ages.length);

let testarre = ['a', 'b', 'c', 'd', 'e'];

// change value 
testarre[1] = 'buuuu' 
 console.log(testarre);

//  arre mathods====

// add new elements to the end of the arrey
testarre.push('F');
 console.log(testarre);

//  remove last elements from the arrey
testarre.pop();
console.log(testarre)

// add new beginning of the arrey

testarre.shift()

testarre.unshift('AA');


console.log(testarre)
console.log(testarre.indexOf('d'))

// arrey concatenation 
const newarre = testarre.concat(['f', 'g', 'h'])

console.log(newarre)

// arre splice 
console.log(testarre.splice(1, 1,'B', ))

testarre.reverse()
testarre.reverse()

console.log(testarre)


// check if the arre contains an elements 
console.log(testarre.includes('AA'))

console.log(testarre.join('==='))
console.log(testarre.toString())

// Capitalize first letter of each word 

let name = "aminul islam rasel"
let words = name.split(" ")

words[0] = words[0][0].toUpperCase() + words[0].slice(1)

console.log(words[0])

words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1)
console.log(words[1])

words[2] = words[2].charAt(0).toUpperCase() + words[2].slice(1)
console.log(words[2])

name = words.join(" ");
console.log(words);