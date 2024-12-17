let emptyString = "";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        emptyString += i + "\n";
    } else {
        emptyString += i + " ";
    }
}
console.log(emptyString);