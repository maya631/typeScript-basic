export class Employee {
    public employeeName!: string;
    public employeeAge!: number; 
    public employeeSalary!: number;

    constructor(name: string, age: number, salary: number) {
        this.employeeName = name;
        this.employeeAge = age;
        this.employeeSalary = salary;
    }

    public static isEmployed: boolean;

    static {
        Employee.isEmployed = true;
        console.log("Static block executed. Employee is employed: " + Employee.isEmployed);
    }

    public work(): void {
        console.log(`${this.employeeName} is working.`);
    }

    public static payTax(): void {
        console.log("Employee is paying taxes.");
    }

}

export function greeting(): void {
    console.log("Hello, welcome to the Employee Management System!");
}
/*export class Employee {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayInfo(): void {
        console.log("Employee Name: " + this.name);
        console.log("Employee Age: " + this.age);
    }
    public static payTax():  void {
    console.log("Employee is paying taxes.");
}  
}

let emp1 = new Employee("Alice", 30);
emp1.displayInfo();

class Employee1 {
public employeeName!: string;
public employeeAge!: number;

constructor(name: string, age: number) {
    this.employeeName = name;
    this.employeeAge = age;
}

displayInfo(): void {
    console.log("Employee Name: " + this.employeeName);
    console.log("Employee Age: " + this.employeeAge);
}

public static isEmployed: boolean = true;

static {
    console.log("Static block executed. Employee is employed: " + Employee1.isEmployed);//true
}

public static displayEmploymentStatus(): void {
    console.log("Employment Status: " + (Employee1.isEmployed ? "Employed" : "Unemployed"));
}
// question: What is the purpose of the static block in the Employee1 class, and how does it differ 
// from instance methods and properties?
// The static block in the Employee1 class is used to execute code at the time of class definition, 
// before any instances of the class are created. It allows you to perform initialization tasks or 
// set up static properties that are shared across all instances of the class. In this case, it logs 
// a message indicating that the static block has been executed and displays the employment status.

// The static block differs from instance methods and properties in that it is not associated with 
// any specific instance of the class. Instead, it is associated with the class itself. Instance methods
// and properties are accessed through instances of the class, while static methods and properties are 
// accessed directly through the class. Static members cannot access instance members directly because 
// they do not belong to any particular instance.

public work (): void {
    //console.log(this.employeeName + " is working.");
    console.log(`${this.employeeName} is working.`); // Using template literals for string interpolation
}


}

export function greeting(): void {
    console.log("Hello, welcome to the Employee Management System!");
}
*/
