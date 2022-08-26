// ***  most Important  *** //

const person = {
    name : 'abul',
    age: 23,
    contract : {
        phone: '01933300000',
        email : "abul@gmail.com"
    },
    education: {
        sclName: "aaabukol high school",
        subjects:[
            { name : 'bangla', mark: 45},
            { name : 'english', mark: 64},
            { name : 'math', mark: 74},            
        ]
    }
}
//  console.log(person.contract);
// console.log(person.contract.email);

// console.log(person.education.subjects)
// console.log(person.education.subjects[2])
console.log(person.education.subjects[2].name)