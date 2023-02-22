
module.exports = (app, Task_List, Task, Users) => {

    app.put('/task/:id', async (req, res) => {
        try {
            const { name , description , active, articleId} = req.body;
            const updatedTask = await Task.update({
                name,
                description, 
                active,
                articleId
            }, { where: { id: req.params.id } });

            res.status(200).json(updatedTask);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Une erreur est survenue' });
        }
    });
};