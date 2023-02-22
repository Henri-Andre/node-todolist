module.exports = (app, Task_List , Task , Users ) => {

    app.post('/taskList', async (req, res) => {
        try {
          const { title, description, userId } = req.body;

          const newTaskList = await Task_List.create({ title, description, userId});
          res.status(201).json(newTaskList);
        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Une erreur est survenue' });
        }
      });
    };