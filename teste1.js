const data = require("./fakeData");

const getUser = (req, res, next) => {

    const { name } = req.body;

    // acessando todos as pessoas do banco 
    data.forEach((obj) => {

        // separando cada nome composto
        obj.name.split(" ").forEach((nomeSeparado) => {
            if (nomeSeparado === name) {
                // Case ache algum, retorna o objeto inteiro 
                return res.send(obj);
            }
        })

        res.send({ message: "usuario não encontrado" });
    })

};

const getUsers = (req, res, next) => {

    res.send(data);

};

module.exports = {
    getUser,
    getUsers
};