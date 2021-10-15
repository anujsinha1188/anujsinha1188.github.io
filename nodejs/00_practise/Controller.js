exports.myMethod = async((req, res) => {
    try {
        res.status(200).json({ message: 'hi' });
    }
    catch (error) {
        res.status(400).json({ message: error });
    }
});