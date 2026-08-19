const pool = require("./connection");

async function listSenas() {
  const sql = "SELECT * FROM senas ORDER BY id_senas DESC";

  const {rows} = await pool.query(sql);
  return rows;
}

async function createSena(nros) {
  const sql = `INSERT INTO senas (nros)
                VALUES ($1)
                RETURNING *`;
  const values = [nros];
  const response = await pool.query(sql, values);
  return response.rows[0];
}

module.exports = { listSenas, createSena };