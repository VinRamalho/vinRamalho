const data = require("./fakeData");
const { validationResult } = require('express-validator');


module.exports = function (req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }

    const { id, name, job } = req.body;


    const reg = data.find(obj => obj.id === id);

    reg.name = name;
    reg.job = job;

    res.send(reg);

    console.log(data);

};