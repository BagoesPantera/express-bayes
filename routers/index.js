const { Router } = require("express");

const dataRouter = require("./data.router");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "Server connected" });
});

router.use(dataRouter);

module.exports = router;