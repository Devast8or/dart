# README for Dart Season Simulation Platform

## Project Overview
The Dart Season Simulation Platform is a web-based application designed to simulate dart seasons, allowing users to register, create profiles, and engage in matches against AI or other players. The platform supports various tournament formats, tracks player statistics, and provides comprehensive analytics and reporting features.

## Features
- **User Management**: Registration, login, and profile management for both human and AI players.
- **Player Database**: Detailed profiles for human and AI players, including stats and history.
- **Tournament Management**: Create and join tournaments with formats like knockout, round-robin, and league.
- **Match Simulation**: Realistic simulation of matches with dart scoring rules.
- **Rankings & Leaderboards**: Track player rankings based on prize money and tournament performance.
- **Season Management**: Aggregate results and manage seasons, including resets.
- **Prize Money Management**: Setup prize pools and automatic distribution based on tournament results.
- **Analytics & Reporting**: Comprehensive statistics and ranking progression for players and tournaments.
- **Responsive UI**: A user-friendly interface that adapts to both desktop and mobile devices.

## Technical Stack
- **Frontend**: HTML5, CSS3 (SASS/SCSS), JavaScript (ES6+)
- **Backend**: Node.js with Express.js
- **Database**: SQLite (using better-sqlite3 package)

## Project Structure
```
dart-season-sim
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   ├── assets
│   ├── data
│   ├── utils
│   ├── index.js
│   └── index.scss
├── .eslintrc.json
├── .prettierrc
├── package.json
├── README.md
└── requirements.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd dart-season-sim
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage
- Open your browser and navigate to `http://localhost:3000` to access the application.
- Follow the on-screen instructions to register, create profiles, and participate in tournaments.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.