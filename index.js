// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    }
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = "12 Broadway"
    return employee
}
function deleteFromEmployeeByKey(employee, name) {
    return {
        function() {
        delete employee.name
        }
    }
}
function destructivelyDeleteFromEmployeeByKey(employee, name, value) {
    delete employee.name
    return employee
}
