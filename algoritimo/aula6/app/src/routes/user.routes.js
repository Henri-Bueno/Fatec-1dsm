const express = require("express");

const {listUsers} = require("../database/users");

// cria um router
const router = express.Router();

router.get("/", async function(req,res){
    const users = await listUsers();
    res.json(users);
})
module.exports = router;