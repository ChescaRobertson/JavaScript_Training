const employeeName = 'Tim Smith';
const startYear = 2017;
let salaryPerMonth = 2409.5;
const permanent = true;

salaryPerMonth = 2510.9;

let tim = `Name: ${employeeName} 
Started with the company: ${startYear} 
Salary: £${salaryPerMonth.toFixed(2)} 
Permanent Status: ${permanent}`;

console.log(tim);
//alert(tim);
