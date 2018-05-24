
/*
* main functions to handle routes requests
*/

var Book = require('../model/books.js');


exports.listBooks = (req,res)=>{
        Book.find({},
        (err, books) =>{
          if(err) res.json({error: err});
            res.json(books);
        });
};

exports.bookByRank = (req,res)=>{
    Book.find({rank: req.body.rank},
        (err, books) =>{
          if(err) res.json({error: err});
              res.json(books);
    });
};

exports.bookRankAuthor = (req,res)=>{
  rank = Book.find({rank:req.body.rank,'author.rank':req.body.author_rank},
    (err,books) =>{
      if(err) res.json({error: err});
      res.json(books);

    });
};
