

module.exports = (app, Task_List , Task , Users ) =>{

 
app.get('/user', async (req, res) => {
    try {
        const users = await Users.findAll({ include: Task_List });
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

}