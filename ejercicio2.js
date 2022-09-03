const Sequelize = require('sequelize');

const sequelize = new Sequelize('ejercicio4', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }) 
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



  class Usuario extends Sequelize.Model {}
  Usuario.init({
    firstName: Sequelize.STRING,
    lastName:Sequelize.STRING
  }, { sequelize, modelName: 'users' });
  
  
  /* crea usuario*/
  sequelize.sync()
    .then(() => Usuario.create({
      firstName: 'nico',
      lastName: 'Fernandez'
    }))
    .then(jane => {
      console.log(jane.toJSON());
    });

//elimina usuario con id =2
Usuario.destroy({
  where: {
    firstName: 'pato'
  }
}).then(() => {
  console.log("Elimine Registro");
});
