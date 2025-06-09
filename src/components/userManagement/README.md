# User Management Components

This directory contains components related to user management for the Dart Season Simulation platform. The components include functionalities for user registration, login, and profile management.

## Components Overview

### UserRegistration.js
- Handles user registration, including form input and submission.
- Validates user input and provides feedback.

### UserLogin.js
- Manages user authentication and session handling.
- Allows users to log in and access their profiles.

### UserProfile.js
- Displays user profile information.
- Provides options for users to edit their profiles.

## Styles
- The styles for these components are defined in `userManagement.module.scss`, which uses CSS modules for scoped styling.

## Usage
Import the components as needed in your application:

```javascript
import UserRegistration from './UserRegistration';
import UserLogin from './UserLogin';
import UserProfile from './UserProfile';
```

Ensure to handle user authentication and state management appropriately in your application.