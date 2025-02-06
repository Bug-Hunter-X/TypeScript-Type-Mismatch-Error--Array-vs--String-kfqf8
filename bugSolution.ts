function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterSafe(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(' ');
  } else {
    return "Hello, " + person;
  }
}

let user = ["Jane", "Doe"];
let userName = "Jane Doe";

console.log(greeterSafe(user)); // Correctly handles the array
console.log(greeterSafe(userName)); // Correctly handles the string