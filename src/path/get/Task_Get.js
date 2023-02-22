module.exports = (app, Task_List , Task , Users ) =>{

 
    app.get('/tasks', async (req, res) => {
        try {
            const taks = await Task.findAll();
            res.json(taks);
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    });
    
    }