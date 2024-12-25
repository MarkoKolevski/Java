class animal {
  constructor(name, kind, speak) {
    this.name = name;
    this.kind = kind;
    this.speak = speak;
  }

  animalPrint() {
    return `${this.name} ${this.kind} ${this.speak}`;
  }
}
const name = prompt("Enter the animals name");
const kind = prompt("Enter kind of animal");
const speak = prompt("What the animal says");
const enterAnimal = new animal(name, kind, speak)

console.log(enterAnimal.animalPrint());














