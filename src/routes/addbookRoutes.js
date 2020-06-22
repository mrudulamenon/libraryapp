const express = require('express');
const addbookRouter = express.Router();
function router(nav) {
    

    addbookRouter.get('/', function (req, res) {
        res.render("addbook",
            {
                nav
            });
    });
    
    return addbookRouter;
}
module.exports = router;