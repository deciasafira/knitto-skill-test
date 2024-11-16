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
Prerequisites
Install Node.js (minimum version 14).
Install Android Studio for Android development (setup guide).
Install dependencies using npm.
Steps to Run the Project Locally
Clone the repository:

bash
Copy code
git clone https://github.com/deciasafira/knitto-skill-test.git
cd knitto-skill-test
Install dependencies:

bash
Copy code
npm install
Start the Metro bundler:

bash
Copy code
npx react-native start --reset-cache
Run the app on Android:

bash
Copy code
npx react-native run-android
API Integration
The application uses the Pixabay API to fetch images.

Base URL: https://pixabay.com/api/
API Key: This project uses the key stored locally in the project for authentication.
Folder Structure
src/features: Contains Redux slices for authentication (authSlice.ts) and bookmarks (bookmarkSlice.ts).
src/screens: Contains loginScreen.tsx and homeScreen.tsx.
src/services: Contains API logic using pixabayApi.ts.
src/navigation: Manages navigation via AppNavigator.tsx.
src/store: Configures the Redux store.
Future Improvements
Responsive UI: Optimize layout for different screen sizes.
Profile Section: Add user-specific settings and preferences.
Enhanced Search: Add more filters and categories for the Pixabay search.
Author
Decia Safira

Feel free to contribute or report issues in this repository!
