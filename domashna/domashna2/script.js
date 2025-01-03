function weightInChickens(oneChicken) {
    const calculate = oneChicken * 0.5;
    return calculate;
}
const chickens = parseFloat(
    prompt("Enter how much chickens you want me to calculate")
);
const calculate = weightInChickens(chickens);

const returnToHtml = document.querySelector("h3");
returnToHtml.textContent += calculate;