const { Pool } = require('pg');
const pool = new Pool({ host: 'localhost', user: 'postgres', password: '123', database: 'bdaula', port: 5432 });
pool.query('SELECT 1').then(r=>{console.log('ok', r.rows); pool.end();}).catch(e=>{console.error('err', e); pool.end();});
