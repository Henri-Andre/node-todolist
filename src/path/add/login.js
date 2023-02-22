const bcrypt = require('bcrypt');
const privateKey = require('../../authentification/key');
const jwt = require ('jsonwebtoken');

module.exports = (app, Users) =>{
    app.post('/login' , (req, res) => {
        const mail = req.body.mail;
        const password = req.body.password;
        Users.findOne({ where : {mail : mail} })
        .then(element => {
            if (!element) {
                return res.status(404).json({message : 'le user '})
            }
            bcrypt.compare(password, element.password)
            .then(passwordValid => {
                if(passwordValid === true){

                    const token = jwt.sign(
                        { userId : element.id},
                        privateKey,
                        {expiresIn : '1h'}
                        )
                    

                    return res.json({mesaage : 'user bien co', data : element, token})
                } else {
                    return res.json({message : 'mdp false pour le user' + mail, data : element })
                }
            })
        })
})

}