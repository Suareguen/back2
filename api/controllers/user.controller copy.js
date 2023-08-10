const User = require('../models/user.model')

const getAllUsers = async (req,res) => {

    try {
        const users = await User.findAll()

        if(users){

            res.status(200).json(users)

        }else{
            
            res.status(404).send('users not found')
        }
        
    } catch (error) {

        res.status(500).send(error.message)
        
    }

}


async function getOneUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("user not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


 async function addNewUser(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(200).json({ message: "User created", user: user });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateUser(req, res) {
  try {
    const [userExist, user] = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },

    });
    console.log(req.params.id)
    if (userExist !== 0) {
      return res.status(200).json({ message: "User updated", user: user });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


async function deleteUser(req, res) {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (user) {
      return res.status(200).json("User deleted");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}





module.exports = {
  getAllUsers,
  getOneUser,
  addNewUser,
  updateUser,
  deleteUser,
};