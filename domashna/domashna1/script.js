const firstDiv = document.querySelector("div");
const allDivs = document.querySelectorAll("div");
const allParagraph =document.querySelectorAll("p");
const lastDiv = allDivs[allDivs.length - 1];
const header3InTheLastDiv = lastDiv.querySelector("h3");
const header1InTheLastDiv = lastDiv.querySelector('h1');
const secondDiv = document.querySelector(".anotherDiv");
const firstParagraphSecondDiv = secondDiv.querySelector("p");
const secondDivElement = secondDiv.querySelector("text");

secondDivTextElement.textContent += "text";
header1InTheLastDiv.innerHTML = `
<p> this is changed </p>
`;

header3InTheLastDiv.innerHTML = `
<p> this is changed too</p>
`;