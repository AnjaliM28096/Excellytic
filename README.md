# Excellytics
A powerful platform for uploading any Excel file (.xls or .xlsx), analyzing the data, and generatinginteractive 2D and 3D charts.

⬛ To run project, simply run the command 'npm run dev' on your terminal and both frontend and backend will run concurrently.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aaryan003/excellytics.git
    cd excellytics
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the necessary environment variables:
    ```bash
    PORT=8080
    DATABASE_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Run the Fronntend & Backend Concurrently :
    ```bash
    npm run dev
    ```

    Or run only the backend by :
    ```bash
    cd backend
    node server.js
    ```

    The backend server will now be running at `http://localhost:8080`.