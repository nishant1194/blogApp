const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {  // Added 'next' here
    try {
        const token = req.headers.authorization.split(" ")[1];
        const verify = jwt.verify(token, "jaiShreeRam");
        console.log(verify);
        if (verify.userType == admin) {
            next();  
        } else {
            return res.status(201).json({
                msg: "not a valid user1"
            });
        }
    } catch (err) {
        console.log(err);
        res.status(201).json({
            msg: "not a valid user121"
        });
    }
};
