# Campus Coin
## Description

CampusCoin is a financial literacy app designed to help university students manage their finances effectively. The app allows users to track their expenses, set financial goals, and learn about financial management through interactive features. The purpose of the project is to promote financial literacy among students and provide them with tools to manage their money wisely.

## Introduction
In today's fast-paced world, managing finances is a crucial skill, especially for university students who are often managing their own money for the first time. CampusCoin is designed to address this need by providing an easy-to-use platform that combines educational resources with practical tools for financial management. With CampusCoin, students can:

    -Track their spending and categorize expenses.
    -Set and achieve financial goals.
    -Learn about budgeting, saving, and investing through interactive tutorials.
    -Receive personalized financial advice and tips.
    -Engage with a community of peers to share financial strategies and experiences.
    
CampusCoin aims to empower students with the knowledge and skills they need to make informed financial decisions, ultimately leading to better financial health and stability.


# Table of Contents

- [Features](#Features)
- [Technologies Used](#Technologies_Used)
- [Getting Started](#Getting_Started)
- [Usage Instructions](#Usage_Instructions)
- [Project Structure](#Project_Structure)
- [API Endpoints](#API_Endpoints)
- [Additional Sections](#Additional_Sections)
- [Contributing](#Contributing)
- [License](#License)
- [Acknowledgment](#Acknowledgement)

## Features

- User Registration and Login
- Password Reset via Email
- Dashboard with Financial Data Visualization
- Expense Tracking by Category
- Top Expenses Visualization
- Net Amount and Cashflow Charts
- Weekly Expenses Breakdown
- Logout Functionality

## Technologies Used

- React.js for the frontend
- Node.js and Express.js for the backend
- MongoDB for the database
- Chart.js for data visualization
- Axios for HTTP requests
- CSS for styling

## Getting Started

### Dependencies

- Node.js
- MongoDB database set up
- React.js
- Axios
- Multer
- JSON Web Tokens (JWT)
- npm
- Chart.js

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/campus-coin.git
    cd campus-coin
    ```

2. **Install backend dependencies:**

    ```sh
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**

    ```sh
    cd ../frontend
    npm install
    ```

4. **Environment Variables**
   Create a .env file in the backend directory and add the following:

   JWT_SECRET=1f16c1a9346cddaa758861ac2eaf0c5657b4657f46b54add213a6cf949aca4da
    EMAIL_USER=campuscoinltd@gmail.com
    EMAIL_PASS=mpdyovsznraqtlyo

 ## Usage Instrunctions

### Running the Application

1. **Start the backend server:**

    ```sh
    cd backend
    run dev
    ```

    The backend server will run on `http://localhost:3000`.

2. **Start the frontend development server:**

    ```sh
    cd ../frontend
    npm start
    ```

    The frontend server will run on `http://localhost:3001`.


### Examples
**1.Sign Up**
    -Navigate to 'frontend\src\components\Signup.js' and create a new account.
**2.Login**
    -Navigate to 'frontend\src\components\Login.js' and log in with your credentials.
**3.Profile Management**
    -Navigate to 'frontend\src\components\ProfilePage.js'
    -Upload and update profile pictures on the profile page.
    -View and edit personal information.
**4.Admin Dashboard**
    -Access the admin dashboard to manage users at 'frontend\src\components\Admin.js'.

5. **Logout:**
    - Use the Logout button in the dashboard header to log out of the application.

### Input/Output
**Sign Up**
    -*Input*: User credentials (email, password, etc.)
    -*Output*: JWT token, user profile details
**Profile Picture Upload**
    -*Input*: Image file
    -*Output*: URL of the uploaded image


## Project Structure
### Overview
The project is divided into two main parts: the backend and the frontend.

### Key Files
-**Backend**
    'server.js':Entry point for the backend server.
    'routes/': Contains route handlers for authentication, user management, etc.
    'models/': Contains Mongoose models for user data.
    'middleware/':Contains middleware for authentication and authorization.

**FrontEnd**
    'src/components/': Contains React components for various pages and features.
    'src/App.js': Main application component where routes are defined.
    'src/index.js': Entry point for the frontend application.


**Folder Structure**

CampusCoin/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── middleware/
│   │   ├── adminMiddleware.js
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── admin.js
│   │   ├── auth.js
│   │   └── upload.js
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Admin.js
│   │   │   ├── Login.js
│   │   │   ├── ProfilePage.js
│   │   │   └── ...
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── ...
│   ├── package.json
└── README.md



## API Endpoints

### Auth Routes
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/financial-data` - Fetch financial data for the dashboard

## Additional Sections
### Team Members
-**Solovea Mutei**(Project Lead)
-**Esli Mose**

### Project Status
**Status**: Ongoing

### Known Issues
-Profile image upload may fail if the server is not configured correctly.
-The admin panel lacks some advanced features like bulk user actions.
-Entering of Financial Data still has some errors we are working on

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to the open-source community for their invaluable resources and tools.

## Contact Information

For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/your-username/campus-coin).

