exports.packages = async (req, res) => {
    try {
        res.status(200).json({
            message: 'You can now get the requested packages for your request.'
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
exports.bookpackage = async (req, res) => {
    try {
        res.status(200).json({
            message: 'New booking added for the POST request.'
        });
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error
        });
    }
};
exports.all = async (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'invalid path'
    });
};