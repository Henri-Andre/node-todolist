

module.exports = (app, Task_List, Task, Users) => {

    app.put('/taskList/:id', async (req, res) => {
        try {
            const { title , description , userId} = req.body;
            const updatedTaskList = await Task_List.update({
                title,
                description, 
                userId
            }, { where: { id: req.params.id } });

            res.status(200).json(updatedTaskList);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Une erreur est survenue' });
        }
    });
};
