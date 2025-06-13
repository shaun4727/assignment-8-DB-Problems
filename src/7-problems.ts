// task-1

interface Person {
    Name: string;
    Age: number;
    Gender: 'Male' | 'Female';
}


const people: Person[] = [
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

let filteredPersons:Person[] = [];
let Names:Person[] = [];

const filterPersons = () => {
    people.forEach(person => {
        if(person.Gender === 'Female'){
            filteredPersons.push(person);
        }else{
            Names.push(person);
        }
    })
}

// filterPersons();
// console.log(filteredPersons,Names);


// task-2

interface Book {
    Title: string;
    Author: string;
    Year: number;
}

const Books:Book[] = [
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

let arrayWithBookTitles:string[] = Books.map(book => book.Title);

// console.log(arrayWithBookTitles);

// Task-3

const squareNumber = (num:number) => {
    return num*num;
}

const doubleNumber = (num:number) => {
    return 2*num;
}

const addFive = (num:number) => {
    return num+5;
}

const pipeFunc = <T>(...funs:((input:T) => T)[]) => {
    return (initial:T) => funs.reduce((acc,inFun) => inFun(acc),initial);
}

const composedFunc = pipeFunc(squareNumber,doubleNumber,addFive);

// console.log(composedFunc(3));


// Task-4

interface Car{
    Make: string;
    Model: string;
    Year: number;
}

const cars:Car[] = [
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

const compareFn = (a:Car,b:Car):number => {
    if(a.Year>b.Year){
        return 1;
    }else if(a.Year < b.Year){
        return -1;
    }

    return 0;
}

const sortedCars = cars.sort(compareFn);

// console.log(sortedCars);

// Task 5

const foundPerson = (val:string):Person | null => {
    const found = people.find(person => person.Name.toLowerCase().includes(val.toLowerCase()));
    if(found){
        return found;
    }else{
        return null;
    }
}

const result = foundPerson("alice");
// console.log(result?result:"Not found");


// task-6

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = numbers.filter(num => num%2 === 0).reduce((acc,nm) => acc+nm,0);

// console.log(sumOfEvenNumbers);


// task-7

const determineIfLeapYear = (year:number):number => {
    if((year%4 === 0 && year%100 !== 0) || (year%100 === 0 && year % 400 === 0)){
        return 1;
    }
    return 0;
}

// console.log(determineIfLeapYear(2016)?'Leap Year':'Not Leap Year');