const newArray = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

//for (let i = 0; i < newArray.length; i++) {
//    console.log(newArray[i])
//}

//forEach
newArray.forEach(function(i) {
    console.log('Skills', i)
})


//map

const newTech = newArray.map(function(i) {
    return i;
})

console.log(newTech)

// for ...of
for (let i of newArray) {
    console.log(i);
}

