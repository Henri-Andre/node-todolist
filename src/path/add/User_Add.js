const bcrypt = require('bcrypt');

module.exports = (app, Task_List , Task , Users ) => {

    app.post('/user' , async (req, res) => {
        try {
            const {pseudo , mail , password , age} = req.body;

            const hashed = await bcrypt.hash(password, 10);

            const newUser = await Users.create({
                pseudo, 
                mail,
                password : hashed,
                age
            });

            res.status(201).json(newUser);

        } catch (err) {
          console.error(err);
          res.status(500).json({message : 'Une erreur est survenu'});

        }
    })
}