const { Sequelize, DataTypes} = require('sequelize');
const db = require('../db/db');
const Task_List = require('./Task_List');

const Users = db.define('Users' , {
        id : {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        pseudo : {
            type : DataTypes.STRING(255),
            allowNull: false
        },

        
        age : {
            type : DataTypes.INTEGER,
            allowNull: false
        },

        mail : {
            type : DataTypes.STRING(255),
            allowNull :false,
            unique: {
                message : 'email déjà pris'
            }
        },

        password : {
            type : DataTypes.STRING,
            allowNull : false
        }


},
{
        timestamps : true,
        createdAt : 'created',
        updatedAt : 'udpdate'  
});

Users.hasMany(Task_List , {
    foreignKey:{
        allowNull : false,
        name : 'userId'
    },
    sourceKey:'id'
})


module.exports = Users;