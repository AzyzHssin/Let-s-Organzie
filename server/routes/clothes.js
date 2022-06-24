const express = require('express');
const router = express.Router();

const {getAllclothes}=require("../controllers/clothes")

router.get("/getAll",getAllclothes);
module.exports = router;
