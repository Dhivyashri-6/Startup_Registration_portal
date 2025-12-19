# Startup Registration Portal

A comprehensive web portal for startup registration and management.

## Features

- **Welcome Page**: Overview of the platform with easy access to Login and Signup.
- **User Functionality**:
  - Secure User Registration and Login.
  - **Register Startup**: Submit startup details including industry, founder info, and description.
  - **Track Status**: View the real-time status of submitted applications (Pending, Approved, Rejected).
- **Admin Functionality**:
  - Admin Dashboard.
  - **Pending Applications**: Review new startup submissions.
  - **Approve/Reject**: Approve valid startups or reject them with a reason.
  - **Rejected Startups**: View a history of rejected applications.

## Tech Stack

- **Frontend**: Angular
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Dhivyashri-6/Startup_Registration_portal.git
    cd Startup_Registration_portal
    ```

2.  **Setup Backend**
    ```bash
    cd backend
    npm install
    # Create a .env file if necessary or configure db.js
    npm start
    ```

3.  **Setup Frontend**
    ```bash
    cd frontend
    npm install
    ng serve
    ```

4.  **Access the Application**
    Open your browser and navigate to `http://localhost:4200`.
