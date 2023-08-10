const router = require("express").Router();
const { getAllUsers } = require('../controllers/user.controller')
const { getOneUser } = require("../controllers/user.controller");
const { addNewUser } = require("../controllers/user.controller");
const { updateUser } = require("../controllers/user.controller");
const { deleteUser } = require("../controllers/user.controller");

router.get('/',getAllUsers)
router.get('/:id',getOneUser)
router.post("/", addNewUser)
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);



module.exports = router