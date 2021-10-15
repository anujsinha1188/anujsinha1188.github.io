exports.myMethod = async (req, res) => {
    console.log(req.body);
    res.send('<h1>Hello ' + req.body.username + ' your details are registered</h1>');
};
