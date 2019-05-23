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
router.get('/usuarios',(req,res)=>{
  Usuario.listarUsuarios()
  .then(data=>{
    res.json(data)
  })
  .catch(err=>{
    console.log(err);
    
  })
})

module.exports = router;
