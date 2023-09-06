const express = require("express");
const {
  summaryController,
  paraController,
  botController,
} = require("../controllers/openaiController");

const router = express.Router();

router.post("/summary", summaryController);
router.post("/Paragraph", paraController);
router.post("/AIBot", botController);

module.exports = router;
