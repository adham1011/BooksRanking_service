const express    = require('express'),
      bodyParser = require('body-parser'),
      books      = require('./rating/controllers/booksController'),/* books collection*/
      app        = express(),
      port       = process.env.PORT || 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/Documentation', express.static('api'));
app.use(
 (req,res,next) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type,Accept");
 next();
});

app.get('/',(req,res)=>{
  res.json({API:'https://books-ranking.herokuapp.com/Documentation/'});
});
app.get('/books/',books.listBooks);/*getting the list of all books*/
app.post('/bookByRank',books.bookByRank); /*getting the list by Book rank*/
app.post('/bookRankAuthor/',books.bookRankAuthor);


/* fallback - returns Json:
*   {url: undefined}
*/
app.all('*',(req,res)=>{
    res.json({url:'undefined'});
});


app.listen(port,
    ()=>{
        console.log(`listening on port ${port}`);
    });
