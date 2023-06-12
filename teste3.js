var data = require("./fakeData");

module.exports = function (req, res) {

    const { name } = req.body;

    let encontrado = false;

    // acessando todos as pessoas do banco 
    data.forEach((obj, index) => {

        // separando cada nome composto
        obj.name.split(" ").forEach((nomeSeparado) => {
            if (nomeSeparado === name) {
                // Case ache algum, retorna o objeto inteiro
                encontrado = true;
                // data[index] = {};
                data.splice(index, 1)
                console.log(data);
                return res.send({ message: "usuario excluido com sucesso!" });
            }
        })
    })

    // caso não encontre
    if (!encontrado) {
        res.send({ message: "usuario não encontrado" });
    }


};