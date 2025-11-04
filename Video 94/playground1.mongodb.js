use('sigmaDataBase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
        "name": "python",
        "price": 18000,
        "instructor": "John"
    },
    {
        "name": "javascript",
        "price": 22000,
        "instructor": "Sarah"
    },
    {
        "name": "c++",
        "price": 15000,
        "instructor": "Raj"
    },
    {
        "name": "react",
        "price": 25000,
        "instructor": "Aman"
    },
    {
        "name": "nodejs",
        "price": 23000,
        "instructor": "Emily"
    },
    {
        "name": "mongodb",
        "price": 17000,
        "instructor": "Leo"
    },
    {
        "name": "html",
        "price": 10000,
        "instructor": "Nina"
    },
    {
        "name": "css",
        "price": 12000,
        "instructor": "Karan"
    },
    {
        "name": "express",
        "price": 19000,
        "instructor": "Vikram"
    },
    {
        "name": "java",
        "price": 20000,
        "instructor": "Harry"
    }
]
);

// Run a find command to view items sold on April 4th, 2014.

// Print a message to the output window.
console.log(`Done inserting data`) ;

