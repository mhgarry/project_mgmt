const router = require("express").Router();

const userRoutes = require("./user_routes");
const noteRoutes =  require("./note_routes");

router.use("/user", userRoutes);
router.use("/note", noteRoutes);

module.exports = router;