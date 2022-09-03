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
      firstName: 'pato',
      lastName: 'rearte'
    }))
    .then(jane => {
      console.log(jane.toJSON());
    });

    
  /* crea usuario*/
  sequelize.sync()
  .then(() => Usuario.create({
    firstName: 'juan',
    lastName: 'riquelme'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

  Usuario.update({ firstName: "juan" }, {
    where: {
      lastName: 'rearte'
    }
  }).then(() => {
    console.log("Done");
  });

  Usuario.update({ firstName: "pato" }, {
    where: {
      lastName: 'riquelme'
    }
  }).then(() => {
    console.log("Done");
  });