const person = {
    name : 'abul',
    age: 23,
    contract : {
        phone: '01933300000',
        email : "abul@gmail.com"
    },
     cat: {
        name: 'lila',
        info:{
            color: 'black',
            weight: '1.2kg'
        }

    }
}

// console.log(person?.dog?.name) ---  output error na ase undefined asbe.
console.log(person.cat?.name?.food?.price);