const express = require('express');
const authRouter = express.Router();
function router(nav) {
    

    authRouter.get('/login', function (req, res) {
        
        //var newPath=req.originalUrl.split('/auth')[1]
        //res.redirect(req.path);
        res.render("login",
            {
                nav
            });
            
    });
    authRouter.get('/signup', function (req, res) {
        
        res.render("signup",
            {
                nav
            });
            
        
    });
    
    
    return authRouter;
}
module.exports = router;