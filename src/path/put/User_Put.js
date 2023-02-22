
const bcrypt = require('bcrypt');

module.exports = (app, Task_List, Task, Users) => {

    app.put('/user/:id', async (req, res) => {
        try {
            const { pseudo, mail, password, age } = req.body;
            const hashed = await bcrypt.hash(password, 10);
            const updatedUser = await Users.update({
                pseudo,
                mail,
                password: hashed,
                age
            }, { where: { id: req.params.id } });

            res.status(200).json(updatedUser);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Une erreur est survenue' });
        }
    });
};
