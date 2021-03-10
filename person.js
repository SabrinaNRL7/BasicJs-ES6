 const fullName = "John Doe";

 const person = {
    firstName: "John",
    lastName: "Doe",
    age: 33,
};

 const display = ({firstName, lastName}) => {
    console.log(`Hello ${firstName} ${lastName}`);
};

export {fullName, person, display};