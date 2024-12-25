const book = {
    title: "",
    author: "",
    readinStatus: true,

    check: function () {
        if (this.readinStatus) {
            return `You have read ${this.title} by ${this.author}`;
        } else {
            return `You havent read ${this.title} by ${this.author}`;
        }
    }
};

book.title = prompt("Enter the title of the book");
book.author = prompt("Enter author of  book");
book.readinStatus = confirm(
    "Have you read the book? (yes for yes,no for no)"
);
console.log(book.check());