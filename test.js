const numbers = [12, 13, 14, 15, 16,17];

const names = ['abul', 'babul', 'tamim', 'sakit', 'eki'];

for (let items of numbers){
    // console.log(items)
}
// numbers.forEach(rohim => console.log(rohim))
// numbers.forEach(rohim => console.log(rohim *2))

// numbers.map(korim => console.log(korim))
// numbers.map(korim => console.log(korim*2))

const a = numbers.map(korim => korim*2)
const b = numbers.map(korim => korim*2)

// console.log('A', a);
// console.log('A', b);

const marks = [12, 32, 25, 90, 50]
const result = marks.find(item => item > 20)
// console.log(result)

// const boro = marks.filter(item => item > 20)
const boro = marks.filter(item => item && item % 2 === 0)
console.log(boro);
console.log(21 % 2);

