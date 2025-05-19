// Optional Chaining ' ? '
const student = {
    namee: 'Juan',
    subject: 'Programming',
    passed: true,
    exams: {
        examOne: 90
    }
}
console.log(student.exams?.examOne)

// Nullish collection operator ' ?? ' 
const pag = 10 ?? 1
const pagTwo = null ?? 1
console.log(pagTwo);
console.log(pag);