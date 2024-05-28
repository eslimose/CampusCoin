# Campus Coin

Campus Coin is a financial management application designed to help users manage their expenses, track financial data, and visualize spending habits. The application includes user authentication, a dashboard for financial analysis, and data visualization using charts.

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

### Prerequisites

- Node.js and npm installed on your local machine
- MongoDB database set up

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

### Running the Application

1. **Start the backend server:**

    ```sh
    cd backend
    npm start
    ```

    The backend server will run on `http://localhost:3000`.

2. **Start the frontend development server:**

    ```sh
    cd ../frontend
    npm start
    ```

    The frontend server will run on `http://localhost:3001`.

## API Endpoints

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password` - Reset password
- `GET /api/financial-data` - Fetch financial data for the dashboard

## Usage

1. **Register a new account:**
    - Navigate to the Signup page and create a new account.

2. **Login:**
    - Navigate to the Login page and enter your credentials to log in.

3. **Reset Password:**
    - If you forget your password, use the Forgot Password link on the Login page to request a reset.

4. **Dashboard:**
    - After logging in, you will be redirected to the dashboard where you can view your financial data and visualize expenses.

5. **Logout:**
    - Use the Logout button in the dashboard header to log out of the application.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to the open-source community for their invaluable resources and tools.

---

For any issues or feature requests, please open an issue on the [GitHub repository](https://github.com/your-username/campus-coin).

