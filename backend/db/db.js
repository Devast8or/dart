// db.js - SQLite connection and helper
const Database = require('better-sqlite3');
const path = require('path');
const dbPath = process.env.DB_PATH || path.join(__dirname, 'database.sqlite');

const db = new Database(dbPath);

// Example: create a table if it doesn't exist
// db.prepare(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)`).run();

module.exports = db;
