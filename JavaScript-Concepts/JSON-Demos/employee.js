const employee = {
    empid : 5642,
    empName : "Soniya Kohale",
    DOJ : "23-06-2026",
    post : "Hr-Admin",
    Salary : "45000",
    Projects : ["E-Commerce", "Payroll", "Attendance"],
    address : {
        flatno : 602,
        area : "Hinjewadi",
        city : "Pune",
        state : "Maharastra",
        pincode : 442201
    },
    calculateTax : function(){
        let tax = this.Salary * 0.01;
        console.log("tax = "+tax);
    }
    
}

console.log(employee.address.city);
console.log(employee.empName);
console.log(employee.salary);
employee.calculateTax();