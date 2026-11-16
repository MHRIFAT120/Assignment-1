const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
// console.log(multiplyValue(10));
// console.log(multiplyValue(10,5));
// console.log(multiplyValue(7,0));
/*-----------------------------------------------------*/
const processInput = (value) => {
    if (typeof value == "string") {
        return value.toLowerCase();
    }
    else if (typeof value == "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return value ? "Active" : "Inactive";
    }
};
// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));
/*-----------------------------------------------------*/
const formatCoordinate = (latitude, longitude, locationName) => {
    return `"Location: ${locationName} (${latitude}, ${longitude})"`;
};
// console.log(formatCoordinate(23.81, 90.41, "Dhaka"));
// console.log(formatCoordinate(22.35, 91.78, "Chittagong"));
/*-----------------------------------------------------*/
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
const getPopularCourses = (courses, minStudents) => {
    return courses.filter(c => c.isPublished && c.students >= minStudents);
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
//  console.log(getPopularCourses(courses,80));
/*-----------------------------------------------------*/
const pluckValues = (items, key) => {
    return items.map(item => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));
/*-----------------------------------------------------*/
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    getDetails() {
        return `Employee : ${this.name}, Base Salary: ${this._baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, _baseSalary, department) {
        super(name, _baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of  ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());
/*-----------------------------------------------------*/
const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
try {
    console.log(await validateAgeAsync(20));
}
catch (error) {
    console.log(error);
}
try {
    console.log(await validateAgeAsync(15));
}
catch (error) {
    console.log(error);
}
export {};
