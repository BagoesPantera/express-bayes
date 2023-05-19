const { Router } = require("express");
const DataController = require("../controllers/data.controller");

const router = Router();

router.get("/all", DataController.getDataAll);
router.post("/predict", DataController.predict)

module.exports = router;
