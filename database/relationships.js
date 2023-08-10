const  User  = require('../api/models/user.model')
const Game = require('../api/models/user.model copy')


const addRelationshipsModells = () => {

    try {

      //// Many to Many


      User.belongsToMany(Game, { through: "user_game" });
      Game.belongsToMany(User, { through: "user_game" });


       console.log("relathionships in models has been addded successfully");

    } catch (error) {

        console.log('error by adding relathionships in modells')

        throw new Error(error)
        
    }
  
}

module.exports = { addRelationshipsModells }