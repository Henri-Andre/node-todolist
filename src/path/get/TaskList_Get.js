module.exports = (app, Task_List , Task , Users ) => {
    app.get('/taskList' , async (req, res) =>{
        try {
            const taskList = await Task_List.findAll({ include: Task });
            res.json(taskList)
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
    });
    
    }