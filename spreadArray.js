// const number = [2, 4, 7 ,85, 9, 5, 90];
// const number2 = [43, 55, 60, 78, 90 ]

// const newArray = [...number,...number2]
// const newArray = [999,...number,...number2, 888]
// console.log(number)
// console.log(...number)

// console.log(newArray);
// console.log(Math.min(3, 4, 5, 6,7, 8))
// console.log(Math.max(3, 4, 5, 6, 7, 8))

// console.log(Math.min(...number))

// *** rest use *** //
// const [a, b, ...rest] = number;
// console.log(a,b, rest)

//  output - 2 4 [7, 85, 9, 5, 90]


const a = [1, 2, 5];
// const b = a;
const b = [...a];

a.push(88)
a.push(99)

console.log('a:',a);
console.log('a:',b);
