// task-1
var people = [
    {
        Name: "Alice Johnson",
        Age: 28,
        Gender: "Female"
    },
    {
        Name: "Bob Smith",
        Age: 34,
        Gender: "Male"
    },
    {
        Name: "Carol Williams",
        Age: 22,
        Gender: "Female"
    },
    {
        Name: "David Brown",
        Age: 45,
        Gender: "Male"
    },
    {
        Name: "Eva Davis",
        Age: 31,
        Gender: "Female"
    }
];
var filteredPersons = [];
var Names = [];
var filterPersons = function () {
    people.forEach(function (person) {
        if (person.Gender === 'Female') {
            filteredPersons.push(person);
        }
        else {
            Names.push(person);
        }
    });
};
var Books = [
    {
        Title: "To Kill a Mockingbird",
        Author: "Harper Lee",
        Year: 1960
    },
    {
        Title: "1984",
        Author: "George Orwell",
        Year: 1949
    },
    {
        Title: "The Great Gatsby",
        Author: "F. Scott Fitzgerald",
        Year: 1925
    },
    {
        Title: "Pride and Prejudice",
        Author: "Jane Austen",
        Year: 1813
    },
    {
        Title: "The Hobbit",
        Author: "J.R.R. Tolkien",
        Year: 1937
    }
];
var arrayWithBookTitles = Books.map(function (book) { return book.Title; });
// console.log(arrayWithBookTitles);
// Task-3
var squareNumber = function (num) {
    return num * num;
};
var doubleNumber = function (num) {
    return 2 * num;
};
var addFive = function (num) {
    return num + 5;
};
var pipeFunc = function () {
    var funs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funs[_i] = arguments[_i];
    }
    return function (initial) { return funs.reduce(function (acc, inFun) { return inFun(acc); }, initial); };
};
var composedFunc = pipeFunc(squareNumber, doubleNumber, addFive);
var cars = [
    {
        Make: "Toyota",
        Model: "Camry",
        Year: 2022
    },
    {
        Make: "Honda",
        Model: "Civic",
        Year: 2023
    },
    {
        Make: "Ford",
        Model: "F-150",
        Year: 2021
    },
    {
        Make: "Tesla",
        Model: "Model 3",
        Year: 2023
    },
    {
        Make: "BMW",
        Model: "X5",
        Year: 2020
    },
    {
        Make: "Hyundai",
        Model: "Tucson",
        Year: 2022
    }
];
var compareFn = function (a, b) {
    if (a.Year > b.Year) {
        return 1;
    }
    else if (a.Year < b.Year) {
        return -1;
    }
    return 0;
};
var sortedCars = cars.sort(compareFn);
// console.log(sortedCars);
// Task 5
// const foundPerson = (val:string) => {
//     const found = people.find(person => person.Name.toLowerCase() === val.toLowerCase());
//     return found;
// }
// console.log(foundPerson("alice"));
console.log(people.find(function (person) { return person.Name.toLowerCase() === 'alice'; }));
