var data = require("./fakeData");

module.exports = function (req, res) {

    const { name, job } = req.body;

    // Logica para obter o próximo ID
    let numeroObj = Number(data.length);
    let ultimoId = data[numeroObj - 1].id
    let proximoId = ultimoId + 1;

    const newUser = {
        id: proximoId,
        name: name,
        job: job,
    }

    data.push(newUser)

    res.send(newUser);

    console.log(data);

};