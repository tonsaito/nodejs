var app = require('./config/express')();
var port = 3000;

app.set('view engine','ejs');

app.get('/produtos', function(req,res){
	//res.send("<html><body>Listagem de Produtos </body></html>");
	console.log("request received");
	res.render("produtos/lista");
});

app.listen(port, function(){
	console.log("Server up and running with NPM");	
});