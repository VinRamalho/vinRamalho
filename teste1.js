const data = require("./fakeData");

const getUser = (req, res, next) => {

    const { name } = req.body;

    let encontrado = false;
    let resultado = [];


    // acessando todos as pessoas do banco 
    data.forEach((obj) => {

        // separando cada nome composto
        obj.name.split(" ").forEach((nomeSeparado) => {
            if (nomeSeparado === name) {
                encontrado = true;

                // Fazendo contagem de leituras com ternario
                !obj.read ? obj.read = 1 : !obj.read++

                // Case ache algum, insere no array
                resultado.push(obj)
            }
        })

    })

    // caso não encontre
    if (!encontrado) {
        res.send({ message: "usuario não encontrado" });
    } else { // Caso encontre
        res.send(resultado);
    }

};

const getUsers = (req, res, next) => {

    res.send(data);

};

module.exports = {
    getUser,
    getUsers
};