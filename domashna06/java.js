function firstLastName (firstName, lastName) {
    let fullName = [];
    for(i = 0; i < firstName.lenght; i++){
        fullName.push(`${i + 1}. ${firstName[1]} ${lastName[i]}`);
    }
    return fullName;
}
let first = ["Marko","Damjan"];
let last = ["Kolevski", "Ristevski"];
let full = firstLastName(first,last);
console.log(full);