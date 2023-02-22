const {Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Task = require('./Task');


const Task_List = db.define('Task_List' , {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },

        title : {
            type : DataTypes.STRING(255),
            allowNull : false
        },

        description : {
            type : DataTypes.TEXT,
            allowNull : false
        },

    }, {
        timestamps : true,
        createdAt : 'created' , 
        updatedAt : false
    });


Task_List.hasMany(Task , {
        foreignKey:{
            allowNull : false,
            name : 'articleId'
        },
        sourceKey:'id'
    })    

    module.exports = Task_List;