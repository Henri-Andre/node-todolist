module.exports = (app, Task_List , Task , Users ) => {
    app.delete('/taskList/:id' , async (req,res) => {
        try{
            const  {id} = req.params;

            const taskList = await Task_List.findByPk(id);

            await taskList.destroy();

            res.json({message : `Le tasklist avec l'id ${id} a été suprimer`})
        }   catch (err) {
            console.error(err);
            res.status(500).json({message : 'Une erreur est survenue'})
        }
    })
}