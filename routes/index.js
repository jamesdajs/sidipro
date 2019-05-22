var express = require('express');

var Usuario = require('../servicios/Usuario')
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  Usuario.listarUsuarios()
    .then(data => {
      console.log(data)

      res.render('index', { title: 'Express',data:data});
    })
});

module.exports = router;
