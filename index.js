/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // Helper function to calculate hours worked on a specific date
// Helper function to find an employee by first name in a collection
const findEmployeeByFirstName = function (collection, firstNameString) {
    return collection.find((employee) => employee.firstName === firstNameString);
};

// Function to calculate payroll for an array of employee records
const calculatePayroll = function (employeeRecords) {
    return employeeRecords.reduce((totalPayroll, employee) => totalPayroll + allWagesFor.call(employee), 0);
};


const hoursWorkedOnDate = function (date) {
    const timeInEvent = this.timeInEvents.find((event) => event.date === date);
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date);

    if (timeInEvent && timeOutEvent) {
        return (timeOutEvent.hour - timeInEvent.hour) / 100; // Assuming time in hours format (e.g., 0900)
    }

    return 0;
};

// Helper function to calculate wages earned on a specific date
const wagesEarnedOnDate = function (date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
};

// Function to create an employee record
const createEmployeeRecord = function (dataArray) {
    return {
        firstName: dataArray[0],
        familyName: dataArray[1],
        title: dataArray[2],
        payPerHour: dataArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    };
};

// Function to create an array of employee records
const createEmployeeRecords = function (dataArray) {
    return dataArray.map(createEmployeeRecord);
};

// Function to add a timeIn event to an employee's record
const createTimeInEvent = function (dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeInEvents.push({ type: "TimeIn", date, hour: parseInt(hour, 10) });
    return this;
};

// Function to add a timeOut event to an employee's record
const createTimeOutEvent = function (dateTime) {
    const [date, hour] = dateTime.split(" ");
    this.timeOutEvents.push({ type: "TimeOut", date, hour: parseInt(hour, 10) });
    return this;
};

// Function to calculate all wages for an employee
const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map((e) => e.date);
    const payable = eligibleDates.reduce((memo, d) => memo + wagesEarnedOnDate.call(this, d), 0);
    return payable;
};

// Example usage:
const employeeData = [
    ["John", "Doe", "Developer", 20],
    ["Jane", "Smith", "Designer", 25],
];

const employees = createEmployeeRecords(employeeData);

// Add timeIn and timeOut events for the employees
employees[0].createTimeInEvent("2024-01-16 0900").createTimeOutEvent("2024-01-16 1700");
employees[1].createTimeInEvent("2024-01-16 1000").createTimeOutEvent("2024-01-16 1800");

// Calculate all wages for each employee
employees.forEach((employee) => {
    console.log(`${employee.firstName} ${employee.familyName}: $${allWagesFor.call(employee)}`);
});


/*const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
*/
