var data = require("./fakeData");

module.exports = function (req, res) {

    const { id, name, job } = req.body;


    const reg = data.find(obj => obj.id === id);

    reg.name = name;
    reg.job = job;

    res.send(reg);

    console.log(data);

};