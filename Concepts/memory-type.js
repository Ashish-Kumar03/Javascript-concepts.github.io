// Stack(Primitive - changes are reflected in copy values) and Heap(Non-primitives - changes are reflected in original value and refrence of original value is sent) memory

const userOne = {
    name: "Ashish",
    age: 23
}

const userTwo = userOne;

userTwo.name = "Ashish Kumar";
console.log(userOne.name);
console.log(userTwo.name);
