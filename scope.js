//  global scope
// local scope
// block scope

////   ***** ////

// const z = 6;
// console.log(z);

// if (true){
//     console.log(z)
// }

// console.log(z);

////   ***** ////

// const x = 6;

// {
//     const x = 10;
//     console.log('inside block:', x)
// }

// console.log('outside block:', x)

////   ***** ////

// let x = 6;

// {
//      x = 10;
//     console.log('inside block:', x)
// }

// console.log('outside block:', x)

// {
//     var x = 10;
//     console.log('inside block:', x);
// }
// console.log('outside block', x);


// ****** ver diye korle inside , outside er block er man newa jay but let/ const diye ta hoyna.****** //


function add (){
    const total = 3 + 5;
    console.log('inside function', total)
}
add()
console.log(total);
