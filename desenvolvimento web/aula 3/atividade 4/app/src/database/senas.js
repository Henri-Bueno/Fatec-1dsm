const pool = require("./connection");

async function listSenas() {
  const sql = "SELECT * FROM senas ORDER BY id_senas DESC";

  const response = await pool.query(sql);
  return response;
}

async function createSena(nros) {
  const sql = `INSERT INTO senas (nros)
                VALUES ($1)
                RETURNING *`;
  const values = [nros];
  const response = await pool.query(sql, values);
  return response[0];
}

module.exports = { listSenas, createSena };