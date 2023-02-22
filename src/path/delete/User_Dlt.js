module.exports = (app, Task_List , Task , Users ) =>{
    app.delete('/user/:id' , async (req, res) =>{
        try{
            const {id } = req.params;

            const user = await Users.findByPk(id);


            await user.destroy();

            res.json({message : `Le user    avec l'id ${id} a été suprimer`});

        }   catch (err) {
            console.error(err);
            res.status(500).json({message : 'Une erreur est survenue'})
        }
    })
}