
// 1. Змінні та типи даних


const str = "Hello";
const num = 42;
const bool = true;
const empty = null;
let undef;

console.log(typeof str, str);
console.log(typeof num, num);
console.log(typeof bool, bool);
console.log(typeof empty, empty);
console.log(typeof undef, undef);

// Перетворення типів
console.log(String(123));
console.log(Number("123"));
console.log(Boolean(0));


// 2. Умови


function getGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "невалідний бал";
    }

    if (score < 60) return "незадовільно";
    if (score < 75) return "задовільно";
    if (score < 90) return "добре";
    return "відмінно";
}

console.log(getGrade(95));

// switch
function getSeasonUA(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            return "зима";
        case 3:
        case 4:
        case 5:
            return "весна";
        case 6:
        case 7:
        case 8:
            return "літо";
        case 9:
        case 10:
        case 11:
            return "осінь";
        default:
            return "невалідний місяць";
    }
}

console.log(getSeasonUA(5));

// тернарний оператор
const age = 19;
const status = age >= 18 ? "повнолітній" : "неповнолітній";
console.log(status);


// 3. Масиви


const students = [
    { name: "Олена", grade: 87, courses: ["JS", "HTML"] },
    { name: "Іван", grade: 95, courses: ["JS"] },
    { name: "Марія", grade: 72, courses: ["CSS"] },
    { name: "Петро", grade: 60, courses: ["JS", "CSS"] },
    { name: "Анна", grade: 45, courses: ["HTML"] },
    { name: "Дмитро", grade: 100, courses: ["JS", "HTML", "CSS"] },
];

students.push({ name: "Новий", grade: 80, courses: ["JS"] });

students.pop();

students.splice(2, 1);

students.splice(1, 0, { name: "Вставлений", grade: 90, courses: ["JS"] });

console.log(students.find(s => s.grade > 90));

console.log(students.filter(s => s.courses.includes("JS")));

console.log(
    students.reduce((acc, s) => acc + s.grade, 0) / students.length
);


// 4. Функції


// 3 способи
function area(a, b) {
    return a * b;
}

const area2 = function (a, b) {
    return a * b;
};

const area3 = (a, b) => a * b;

// closure
function createCounter() {
    let value = 0;

    return {
        increment: () => ++value,
        decrement: () => --value,
        getValue: () => value
    };
}

// default params
function createUser(name, role = "student", isActive = true) {
    return { name, role, isActive };
}

// rest
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

// destructuring
function printStudentInfo({ name, grade, courses }) {
    console.log(name, grade, courses.join(", "));
}


// 5. Об'єкти


const studentProfile = {
    firstName: "Олена",
    lastName: "Коваль",
    age: 20,
    university: "КПІ",
    grades: { math: 85, physics: 92 },
    isActive: true,

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    getAverageGrade() {
        const vals = Object.values(this.grades);
        return vals.reduce((a, b) => a + b, 0) / vals.length;
    }
};

console.log(studentProfile.getFullName());
console.log(studentProfile.getAverageGrade());


// 6. Method chaining


const products = [
    { name: "Laptop", price: 25000, category: "electronics", inStock: true, quantity: 2 },
    { name: "Phone", price: 15000, category: "electronics", inStock: true, quantity: 3 },
    { name: "Chair", price: 2000, category: "furniture", inStock: false, quantity: 5 },
    { name: "TV", price: 30000, category: "electronics", inStock: true, quantity: 1 },
];

const total = products
    .filter(p => p.inStock)
    .map(p => p.price * p.quantity)
    .reduce((a, b) => a + b, 0);

console.log(total);


// 7. Рядки


function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

function truncate(str, len) {
    return str.length > len ? str.slice(0, len) + "..." : str;
}

function isValidEmail(email) {
    return email.includes("@") &&
        email.indexOf("@") > 0 &&
        email.lastIndexOf(".") > email.indexOf("@") + 1;
}

console.log(capitalize("javaScript"));
console.log(countWords("JS це круто"));
console.log(truncate("довгий текст приклад", 10));
console.log(isValidEmail("test@mail.com"));