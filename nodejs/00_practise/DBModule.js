module.exports = (username, password) => {
    console.log('in constructor');
    console.log(username == 'admin' && password == 'admin');
    //return "";
};
exports.authenticate = (username, password) => {
    return username == 'admin' && password == 'admin';
};