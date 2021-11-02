const router = require("express").Router();

const apiRoutes = require("./api/apiRoutes");
const homeRoutes = require("./htmlRoutes.js");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

module.exports = router;
