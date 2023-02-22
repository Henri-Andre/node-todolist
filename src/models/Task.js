const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db/db');




const Task = db.define('Task', {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    name : {
        type : DataTypes.STRING(255),
        allowNull : false
    },


    description : {
        type : DataTypes.TEXT,
        allowNull : false
    },

    active : {
        type : DataTypes.BOOLEAN,
        allowNull: false
    }

},{
    timestamps : true,
    createdAt : 'created',
    updatedAt : false   
});


module.exports = Task;

