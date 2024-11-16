# knitto-skill-test
Features
1. Login Screen
Authentication: User must login with username admin and password admin.
Authorization: Redirects to Home screen upon successful login. Token is stored in AsyncStorage for session persistence.
2. Home Screen
Search Images: Users can search for knitting-related images via the Pixabay API.
Infinite Scroll: List of images loads dynamically with an infinite scroll.
Bookmarks: Users can bookmark images they like, which are stored in the Redux state.
Filter by Bookmarks: A dedicated section to view only bookmarked images.

Technologies Used
React Native with TypeScript
Redux Toolkit for state management
Redux Toolkit Query for API integration
Pixabay API for fetching images
AsyncStorage for token persistence

Installation & Setup
Prerequisites:
1. Install Node.js (minimum version 14).
2. Install Android Studio for Android development (setup guide).
3. Install dependencies using npm.
Steps to Run the Project Locally:
1. Clone the repository:
- git clone https://github.com/deciasafira/knitto-skill-test.git
- cd knitto-skill-test
2. Install dependencies:
- npm install
3. Start the Metro bundler:
- npx react-native start --reset-cache
4. Run the app on Android:
- npx react-native run-android

API Integration
The application uses the Pixabay API to fetch images.
1. Base URL: https://pixabay.com/api/
2. API Key: This project uses the key stored locally in the project for authentication.


Author:
Decia Safira
