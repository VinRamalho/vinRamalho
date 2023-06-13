

const data = require("./fakeData");

module.exports = function (req, res) {

    const { name } = req.body;

    let encontrado = false;
    let resultado = [];

    data.forEach((obj) => {

        // separando cada nome composto
        obj.name.split(" ").forEach((nomeSeparado) => {
            if (nomeSeparado === name) {
                encontrado = true;

                // Case ache algum, insere no array
                resultado.push(obj)
            }
        })

    })

    if (!encontrado) {
        res.send({ message: "usuario não encontrado" });
    } else { // Caso encontre
        res.send(`Usuário ${name} foi lido ${resultado[0].read} vez${resultado[0].read > 1 ? "es" : ""}.`);

    }



};