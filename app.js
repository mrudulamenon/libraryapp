const express=require('express');
const app = new express();
const path=require('path');

const nav=[{link:'/index',name:'Home'},
{link:'/books',name:'Books'},
{link:'/authors',name:'Authors'},
{link:'/auth/login',name:'Log-In'},
{link:'/auth/signup',name:'Sign-Up'},
{link:'/addbook',name:'Add New Book'}]


const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const authRouter=require('./src/routes/authRoutes')(nav);
const addbookRouter=require('./src/routes/addbookRoutes')(nav);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
//app.set('views',path.join(__dirname,'/src/views'));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/auth',authRouter);
app.use('/addbook',addbookRouter);



app.get('/',function(req,res){
    res.render("index",{nav});
});
app.get('/index',function(req,res){
    res.render("index",{nav});
});
app.get('/auth/index', function(req, res) {
    res.redirect('/');
});

app.listen(5000);
console.log("Server ready at 5000");