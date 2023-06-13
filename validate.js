const { header } = require('express-validator');

exports.validate = (method) => {
    switch (method) {
        case 'teste3': {
            return [
                header('permission').custom((value) => {
                    if (value !== 'adm') {
                        throw new Error('Acesso não autorizado');
                    }
                    return true;
                })
            ];
        }
        case 'teste4': {
            return [
                header('permission').custom((value) => {
                    if (value !== 'adm') {
                        throw new Error('Acesso não autorizado');
                    }
                    return true;
                })
            ];
        }
    }
};
