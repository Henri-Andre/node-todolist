
module.exports = (app, Task_List , Task , Users ) => {

    app.post('/task', async (req, res) => {
        const { name, description, active, articleId } = req.body;
      
        try {
          const newTask = await Task.create({
            name,
            description,
            active,
            articleId
          });
      
          res.status(201).json(newTask);
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: 'Une erreur est survenue' });
        }
      });
}