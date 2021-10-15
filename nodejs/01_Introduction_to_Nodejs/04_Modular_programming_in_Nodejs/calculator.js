async function add(operator1, operator2) {
    return 'Result: ', operator1 + operator2;
}
async function substract(operator1, operator2) {
    return 'Result: ', operator1 - operator2;
}
async function asyncCall() {
    console.log('calling');
    const result = await add(2, 3);
    console.log(result);
}
asyncCall();

exports.add = async (operator1, operator2) => {
    console.log("Result:", operator1 + operator2);
};
exports.subtract = async (operator1, operator2) => {
    console.log("Result:", operator1 - operator2);
};