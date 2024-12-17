let year = prompt("Vnesi godini za da go doznaes tvojot kineski horoskop:");
year = parseInt(year);
let zodiacAnimals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
let zodiac = zodiacAnimals[(year - 4) % 12];
alert("The Chinese Zodiac for the year " + year + " is: " + zodiac);