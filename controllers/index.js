const router = require("express").Router();

const apiRoutes = require("./apiRoutes.js");
const homeRoutes = require("./htmlRoutes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
