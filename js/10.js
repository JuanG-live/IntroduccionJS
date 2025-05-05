// Modified Arrays 
const tech = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

//console.log(tech);

// Added elements
const newTech = [...tech, 'PHP', 'Swift'];
//console.log(newTech);
// or

const newTechnology = tech.filter(function(tech){
    if(tech !== 'Ruby'){
        return tech
    }
})

console.log(tech)
console.log(newTechnology)

const newTech2 = tech.map(function(tech){
    if (tech === 'C++') {
        return 'Nest.js'
    } else { 
        return tech
    }
})
console.log(newTech2);