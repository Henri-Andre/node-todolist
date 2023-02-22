const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    'list_cours',
    'root',
    '',
    {
        host:'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone : 'Etc/GMT-2'
        },
        logging : false
    }
)


sequelize.authenticate()
    .then(_=> console.log('la connexion  la base de donnés a réussi'))
    .catch(error => console.error('Erreur de connexion à la base de données' , error));

sequelize.sync(/*{ force : true}*/)
    .then(_ => console.log('la synchronisation a réussi'))
    .catch(error => console.error('Erreur de synchronisation : ', error));

module.exports =sequelize;
