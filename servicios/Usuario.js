var db = require('./coneccion');
module.exports = class Usuario {

    static listarUsuarios() {
        return new Promise((req, res) => {
            

            db.query('SELECT * from usuarios', function (err, rows, fields) {
                if (err) res(err);
                req(rows)
            });

            
        })

    }

}