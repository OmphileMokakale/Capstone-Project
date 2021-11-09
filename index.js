let express = require('express');
let app = express();

var exphbs  = require('express-handlebars');

// app.get("/", function(req, res){
//   res.send("Bill Settings WebApp");
// });

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
// enable the static folder...
app.use(express.static('public'));


let PORT = process.env.PORT || 3009;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});



app.get('/', function (req, res) {
    res.render('home');
});
