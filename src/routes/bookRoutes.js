const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav) {
    // var books = [
    //     {
    //         title: 'Tom and Jerry',
    //         author: 'Joseph Barbera',
    //         genre: 'Cartoon',
    //         img: 'tom.jpg'
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J K Rouling',
    //         genre: 'Fantacy',
    //         img: 'Harry.jpg'
    //     },
    //     {
    //         title: 'Pathummayude Aadu',
    //         author: 'Basheer',
    //         genre: 'Drama',
    //         img: 'paadu.jpg'
    //     }
    // ]


    booksRouter.get('/', function (req, res) {
        Bookdata.find()
        .then(function(books){
            res.render("books",
            {
                books,
                nav
            });
        });        
    });

    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',{
                nav,
                book
            });
        });       
    });
    return booksRouter;
}
module.exports = router;