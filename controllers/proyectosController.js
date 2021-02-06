
//funcion que se exporta cuando se le llama al controlador.funcion
//ejmplo de llamada proyectosController.proyectosHome
//se usa send() para imprimir solo lo que está entre ''
exports.proyectosHome = (req, res) => {
    res.render('index');
}
//se usa res.render('vista') para que renderice a la vista en caso de pug
exports.proyectosHome2 = (req, res) => {
    res.render('nosotros');
}