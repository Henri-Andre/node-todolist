const jwt = require('jsonwebtoken');
const privateKey = require('../authentification/key')


module.exports = (req, res, next) => {
    const token = req.headers.authorization.split('')[1];
    console.log(token);
    if (!token){
        return res.status(404).json({message : 'pas de token'});
    }
    jwt.verify(token, privateKey, (error, decodedToken) => {
        console.log( 'decode token => ', decodedToken);
        
        if (error) {
        return res.status(401).json({message : 'mauvaise token, autorisation refusé'})
        }
    
        const usersId = decodedToken.usersId;
        if (req.body.usersId && req.body.usersId !== usersId){
            res.status(401).json({message : 'id incorrect'})
        } else {
            next();
        }

       

        })
   
}