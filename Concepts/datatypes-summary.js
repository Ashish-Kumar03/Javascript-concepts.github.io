// Primitives(7 types : Number, String, Boolean, null, Symbol, undefined, BigInt  ) and Non-primitive(Reference)(3 types : Array, Objects, Functions) Datatypes
// Javascript is dynamically typed language.

const myObj = {
    name: "Ashish",
    age: 23,
    subjects: {
        firstSub : "DSA",
        secondSub : "DBMS",
        thirdSub : "Javascript",
    },
    graduationStatus : "Completed",
}

const {subjects, graduationStatus} = myObj;
console.log(subjects, graduationStatus);