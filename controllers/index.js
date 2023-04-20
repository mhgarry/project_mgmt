const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./view_routes');
const authRoutes = require("./auth_routes");
const privateRoutes = require("./private_routes");

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use("/", authRoutes);
router.use("/", privateRoutes);

module.exports = router;
