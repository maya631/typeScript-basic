/*

Windows + V
The Windows + V keyboard shortcut is used to open the clipboard history on Windows 10 and later versions. This feature allows users to view and manage their clipboard history, which includes text, images, and other items that have been copied or cut. By pressing Windows + V, users can see a list of recently copied items and choose to paste any of them into their current document or application. This can be particularly useful for quickly accessing previously copied content without having to re-copy it.

To enable clipboard history, users can go to Settings > System > Clipboard and toggle on the "Clipboard history" option. Once enabled, the clipboard history will start recording items that are copied or cut, allowing users to access them using the Windows + V shortcut. Additionally, users can pin frequently used items to the clipboard history for easy access in the future.


*/

import {greeting, Employee} from "./ClassAndObject";

let employee1 = new Employee("John Doe", 30, 50000);
console.log(greeting);
employee1.work();
console.log(employee1);
console.log(Employee.isEmployed);
Employee.payTax();

/*
Static block executed. Employee is employed: true
[Function: greeting]
John Doe is working.
Employee {
  employeeName: 'John Doe',
  employeeAge: 30,
  employeeSalary: 50000
}
true
Employee is paying taxes.
*/