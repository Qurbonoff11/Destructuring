/* const complexArray = [
  "hello",
  123,
  false,
  null,
  undefined,
  {
    id: 101,
    username: "Sardorbek",
    age: 22,
    isStudent: true,
    hobbies: [
      "reading",
      "coding",
      {
        type: "sport",
        name: "football",
      },
    ],
    address: {
      country: "Uzbekistan",
      city: "Tashkent",
      zip: 100000,
    },
  },
  [
    // nested array
    "nested",
    99,
    [true, null, ["deep", 88]],
  ],
  function (a, b) {
    // function
    return a + b;
  },
  {
    calculate: function (x) {
      return x * x;
    },
    description: "This is a function inside object",
  },
];

let [
  text,
  num,
  bool,
  nul,
  und,
  { id, username, age, isStudent, hobbies, address },
  [nested, number, [tru, nulll, [deep, num2]]],
  thisFunction,
  { calculate, description },
] = complexArray;

let [reading, coding, {type, name}] = hobbies;
let {country, city, zip} = address

console.log(text);
console.log(num);
console.log(bool);
console.log(nul);
console.log(und);

console.log(id);
console.log(username);
console.log(age);
console.log(isStudent);
console.log(reading);
console.log(coding);
console.log(type);
console.log(name);
console.log(country);
console.log(city);
console.log(zip);

console.log(nested);
console.log(number);
console.log(tru);
console.log(nulll);
console.log(deep);
console.log(num2);

console.log(thisFunction);

console.log(calculate);
console.log(description);
 */

// =================================================

const company = {
  fullName: "Tech Solutions",
  founded: 2010,
  location: {
    country: "Uzbekistan",
    city: "Tashkent",
    address: {
      street: "Yunusobod ko'chasi",
      building: 12,
      zipCode: "100017",
    },
  },
  employees: [
    {
      id: 1,
      name: "Ali",
      position: "Frontend Developer",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      contact: {
        email: "ali@example.com",
        phone: "+998901234567",
      },
    },
    {
      id: 2,
      name: "Laylo",
      position: "Backend Developer",
      skills: ["PHP", "Laravel", "MySQL"],
      contact: {
        email: "laylo@example.com",
        phone: "+998909876543",
      },
    },
  ],
  isHiring: true,
};

const {
  fullName,
  founded,
  location: {
    country,
    city,
    address: { street, building, zipCode },
  },
  employees,
  isHiring,
} = company;

const {
  id: id1,
  name: name1,
  position: position1,
  skills: skills1,
  contact: { email: email1, phone: phone1 },
} = employees[0];

const {
  id: id2,
  name: name2,
  position: position2,
  skills: skills2,
  contact: { email: email2, phone: phone2 },
} = employees[1];

const [a, b, c, d] = skills1;
const [e, f, g] = skills2;

console.log(fullName);
console.log(founded);
console.log(country);
console.log(city);
console.log(street);
console.log(building);
console.log(zipCode);
console.log(id1);
console.log(name1);
console.log(position1);
console.log(a, b, c, d);
console.log(email1);
console.log(phone1);
console.log(id2);
console.log(name2);
console.log(position2);
console.log(e, f, g);
console.log(email2);
console.log(phone2);
console.log(isHiring);