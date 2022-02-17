const passport = require('passport')
module.exports = (app)=>{
    app.get('/auth/github', passport.authenticate('github'));

    app.get('/auth/github/callback', passport.authenticate('github', {
            successRedirect:'/'
        }));

    app.get('/', (req, res, next)=>{
            if(req.isAuthenticated()){

                return next();
            } else {
                res.render('auth');
            }
        });
}