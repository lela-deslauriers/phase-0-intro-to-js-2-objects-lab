const employee = {
    name: {
        firstName: "Kittah",
        lastName: "Deslauriers",
    },
    address: {
        street: {
            line1: "11 Broadway",
            line2: "PH",
        },
        city: "San Francisco",
        state: "CA",
        zipCode: 94109,
    }
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let copyEmployee = {...employee};
    delete copyEmployee[key];
    return copyEmployee;
    
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}