module.exports = (app, Task_List , Task , Users ) => {
    app.delete('/task/:id' , async (req,res) => {
        
            const  {id} = req.params;

        try{
            const task = await Task.findByPk(id);

            await task.destroy();

            res.json({message : `Le tasklist avec l'id ${id} a été suprimer`})
        }   catch (err) {
            console.error(err);
            res.status(500).json({message : 'Une erreur est survenue'})
        }
    })
}