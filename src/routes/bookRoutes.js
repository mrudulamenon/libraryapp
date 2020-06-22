const express = require('express');
const booksRouter = express.Router();
function router(nav) {
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: 'tom.jpg'
        },
        {
            title: 'Harry Potter',
            author: 'J K Rouling',
            genre: 'Fantacy',
            img: 'Harry.jpg'
        },
        {
            title: 'Pathummayude Aadu',
            author: 'Basheer',
            genre: 'Drama',
            img: 'paadu.jpg'
        }
    ]


    booksRouter.get('/', function (req, res) {
        res.render("books",
            {
                books,
                nav
            });
    });

    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render('book',{nav,book:books[id]});
    });
    return booksRouter;
}
module.exports = router;