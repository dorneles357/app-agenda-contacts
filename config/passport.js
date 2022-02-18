const mongoose = require('mongoose');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

module.exports = () =>{

    const Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.APP_URL
    }, (accessToken, refreshToken, profile, done)=>{
        Usuario.findOrCreate(
            {"login": profile.username},
            {"nome": profile.username},
            (erro, usuario)=>{
                if(erro){
                    console.log(erro);
                    return done(erro);
                }
                return done(null, usuario);
            }
        )
    }));

    passport.serializeUser((usuario, done)=>{
        done(null, usuario._id);
    });

    passport.deserializeUser((id, done)=>{
        Usuario.findById(id).exec()
            .then((usuario)=>{
                done(null, usuario);
            });
    });
}