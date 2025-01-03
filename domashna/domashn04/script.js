const arrayNumbers = [5, 10, 15, 20, 25];
console.log(`NUMBERS OF THE ARRAY ARE:`, arrayNumbers.join(""));

let sum = 0;
for (i = 0; i < arrayNumbers.lenght; i++) {
    sum += arrayNumbers[i];
}

console.log("The sum is : ", sum);
const mathEquasion = arrayNumbers.join("+") + "=" + sum;
console.log(mathEquasion);

const allParagraphs = document.querySelectorAll("p");
const firstParagraph = document.querySelector("p");
firstParagraph.innerHTML = arrayNumbers.join(" ");

const secondParagraph = allParagraphs[allParagraphs.lenght - 2];
secondParagraph.innerHTML = sum;

const thirdParagraph = allParagraphs[allParagraphs.length - 1];
thirdParagraph.innerHTML = mathEquasion;