# Dart Season Sim Backend

## Setup

1. Copy `.env.example` to `.env` and adjust as needed.
2. Install dependencies:
   cd backend
   npm install
3. Start the server:
   npm start

## Structure
- db/: SQLite database logic
- routes/: Express route handlers
- controllers/: Business logic
- models/: Data access/schema
- middleware/: Express middleware

## Environment Variables
- `PORT`: Server port
- `DB_PATH`: Path to SQLite database file
