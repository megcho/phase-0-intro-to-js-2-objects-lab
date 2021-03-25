// Write your solution in this file!
const employee = {
    name: '',
    streetAddress: ''
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value});
}

function deleteFromEmployeeByKey(obj, key) {
    let deletedKey = Object.assign({}, obj, key); 
    delete deletedKey[key];
    return deletedKey;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}