/*  Nama : Sabrina N R Lingga
ARRAY EXERCISES
1. for loop */
let people = ["Greg", "Mary", "Devon", "James"];
for (let i = people; i <= people; i++) {
    console.log(i);
}

//2. forEach()
people.forEach(function(people) {
    console.log(people);
});

//3. remove "Greg from the array"
people.shift("Greg");
console.log(people);

//4. remove "James"
people.shift("James");
console.log(people);

//5. Add "Matt"
people.unshift("Matt");
console.log(people);

//6. Add "Sabrina" in the end of array
people.push("Sabrina");
console.log(people);

//7. use for-loop. after console.log-ing "Mary", exit from the loop
for(let i =0; i< people.length; i++){
    if(i > 1){
        break;
    }
    console.log(people[i]);
} 

//8. using slice to make a copy of array. the copy should NOT include "Mary" or "Matt"
let copy = people.slice(2,4);
console.log(copy);

/*9. Redefine the people variable with the value you started 
with. Using the splice command, remove "Devon" 
from the array and add "Elizabeth" and "Artie". 
Your array should look like this when you are done 
["Greg", "Mary", "Elizabeth", "Artie", "James"].*/

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1, "Elizabeth", "Artie");
console.log(people);

/*10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".*/
let withBob = people.concat("Bob");
console.log(withBob);

//OBJECT EXERCISES
let programming = {
    languages: ["Javascript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//1. Write the command to add the language "Go" to the end of the languages array.
programming.languages[3] = "Go";
console.log(programming.languages);

//2. By using the bracket notation, change the difficulty to the value of 7.
programming['difficulty'] = 7;
console.log(programming.difficulty);

//3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);
//4. By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = 'true';
console.log(programming.isFun);

//5. Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output.
let languages = programming.languages.map(function(item, index) {
    return index + " - " + item;
})
console.log(languages);