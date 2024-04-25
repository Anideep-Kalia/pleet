# Meeting Manager

Meeting Manager is an application that allows professionals to manage their meetings efficiently. It stores available time slots and preferred days, streamlining the scheduling process.

## Features

- Allows professionals to manage their meetings efficiently
- Stores available time slots and preferred days
- Streamlines the scheduling process
- User authentication using Firebase Authentication
- Secure data storage using Firebase Firestore
- Responsive UI for easy access on multiple devices

## Tech Stack

- **Frontend**: React.js, Material-UI, Tailwind CSS, HTML, JavaScript
- **Backend**: Firebase Firestore
- **Authentication**: Firebase Authentication

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm
- You have created a Firebase project and set up Firestore and Authentication
- You have created a `.env` file in the client directory with the following variables:
  ```
  REACT_APP_FIREBASE_API_KEY=your_api_key
  REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
  REACT_APP_FIREBASE_DATABASE_URL=your_database_url
  REACT_APP_FIREBASE_PROJECT_ID=your_project_id
  REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  REACT_APP_FIREBASE_APP_ID=your_app_id
  ```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/meeting-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd meeting-manager
   ```

3. Install dependencies:

   ```bash
   cd client
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Deploying to Firebase

To deploy the application to Firebase, follow these steps:

1. Build the React app:

   ```bash
   cd client
   npm run build
   ```

2. Install Firebase CLI (if not installed):

   ```bash
   npm install -g firebase-tools
   ```

3. Login to Firebase:

   ```bash
   firebase login
   ```

4. Initialize Firebase in your project (if not initialized):

   ```bash
   firebase init
   ```

5. Deploy to Firebase:

   ```bash
   firebase deploy
   ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Anideep Kalia - https://twitter.com/AnideepKalia - anideepkalia@gmail.com

Project Link: https://pleet-3555b.web.app/
