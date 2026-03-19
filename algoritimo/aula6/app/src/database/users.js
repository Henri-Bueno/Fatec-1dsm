const pool = require("./connection");

async function listUsers(){
    const query = "SELECT * FROM users ORDER BY name ASC";

    const {rows} = await pool.query(query);
    return rows;
}

module.exports = {
    listUsers
};