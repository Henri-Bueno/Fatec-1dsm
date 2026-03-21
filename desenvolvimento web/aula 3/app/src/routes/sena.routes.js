const express = require("express");
const {listSenas,createSena} = require("../database/senas");
const router = express.Router();

router.get("/", async function(req, res){
    const response = await listSenas();
    const {rows} = response;
    res.send(rows);
});

// curl -X POST http://localhost:3004/senas -H "Content-Type: application/json" -d "{\"nros\":\"1 2 3 4 5 6\"}"
router.post("/", async function(req, res){
    const {nros} = req.body;
    const response = await createSena(nros);
    res.send(response.rows);
});

module.exports = router;