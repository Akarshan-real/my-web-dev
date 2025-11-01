// SELECTION DATABASE
use('CrudDB');

// CREATING DATABASE 

db.createCollection('courses');

// INSERT 
if (false) {

    db.courses.insertOne({
        name: "Harry's web dev free course",
        price: 0,
        assignments: 12 ,
        projects : 45
    }) 

    const courses = [
        {
            name: "Harry's web dev free course",
            price: 0,
            assignments: 12,
            projects: 45,
            duration: "8 weeks"
        },
        {
            name: "CodeWithHarry JavaScript Bootcamp",
            price: 0,
            assignments: 10,
            projects: 25,
            duration: "6 weeks"
        },
        {
            name: "Python for Absolute Beginners",
            price: 0,
            assignments: 8,
            projects: 18,
            duration: "5 weeks"
        },
        {
            name: "C++ Masterclass by Harry",
            price: 0,
            assignments: 15,
            projects: 30,
            duration: "10 weeks"
        },
        {
            name: "Learn React in 2025",
            price: 0,
            assignments: 9,
            projects: 20,
            duration: "7 weeks"
        },
        {
            name: "Backend Dev with Node.js",
            price: 0,
            assignments: 11,
            projects: 28,
            duration: "9 weeks"
        },
        {
            name: "Full Stack MERN Training",
            price: 0,
            assignments: 14,
            projects: 40,
            duration: "12 weeks"
        },
        {
            name: "Data Structures & Algorithms (Free)",
            price: 0,
            assignments: 20,
            projects: 10,
            duration: "11 weeks"
        },
        {
            name: "Java Crash Course",
            price: 0,
            assignments: 13,
            projects: 22,
            duration: "6 weeks"
        },
        {
            name: "HTML & CSS Complete Roadmap",
            price: 0,
            assignments: 6,
            projects: 15,
            duration: "4 weeks"
        },
        {
            name: "MongoDB Deep Dive",
            price: 99,
            assignments: 10,
            projects: 18,
            duration: "8 weeks"
        },
        {
            name: "Express.js API Development",
            price: 79,
            assignments: 8,
            projects: 16,
            duration: "7 weeks"
        },
        {
            name: "TypeScript Zero to Hero",
            price: 89,
            assignments: 12,
            projects: 20,
            duration: "9 weeks"
        },
        {
            name: "Next.js Advanced Guide",
            price: 149,
            assignments: 14,
            projects: 25,
            duration: "10 weeks"
        },
        {
            name: "Rust for Web Devs",
            price: 59,
            assignments: 7,
            projects: 12,
            duration: "6 weeks"
        },
        {
            name: "GoLang Backend Crash Course",
            price: 99,
            assignments: 9,
            projects: 19,
            duration: "8 weeks"
        },
        {
            name: "Docker & Kubernetes for Developers",
            price: 129,
            assignments: 11,
            projects: 21,
            duration: "10 weeks"
        },
        {
            name: "Firebase + React Integration",
            price: 69,
            assignments: 6,
            projects: 14,
            duration: "5 weeks"
        },
        {
            name: "TailwindCSS + UI Design Bootcamp",
            price: 49,
            assignments: 8,
            projects: 17,
            duration: "4 weeks"
        },
        {
            name: "DevOps Essentials with Harry",
            price: 119,
            assignments: 10,
            projects: 23,
            duration: "9 weeks"
        }
    ];

    db.courses.insertMany(courses);
};

// FIND
if (false) {
    let b = db.courses.find({});
    console.log(b);

    let a = db.courses.findOne({});
    console.log(a);
};

// UPDATE
if (false) {
    db.courses.updateOne({ price: 0 }, { $set: { price: 69 } });

    db.courses.updateMany({ price: 0 }, { $set: { price: 420 } });
};

// DELETE
if (false) {
    db.courses.deleteOne({ price: 69 });

    db.courses.deleteMany({});
};

// Comparison Query Predicate Operators
if (false) {
    db.courses.find({price : {$eq : 1000}});

    db.courses.find({price : {$gt : 1500}});

    db.courses.find({price : {$gte : 149}});

    db.courses.find({price : {$in : [1000,3000,2000]}});

    db.courses.find({price : {$lt : 2000}});

    db.courses.find({price : {$lte : 2500}});

    db.courses.find({price : {$ne : 99}});

    db.courses.find({price : {$nin : [1000,149,99,3000]}});
};