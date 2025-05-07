# 🧘‍♀️ YogaWeb

YogaWeb is a full-stack web application that allows students to purchase and access yoga video lessons, while providing instructors and administrators with dedicated tools for managing content and users.

## 🌟 Key Features

- **Video Lesson Platform**: Students can browse, purchase, and watch yoga video classes.
- **Role-Based Dashboards**: Custom dashboards for students, instructors, and admins, each with role-specific capabilities.
- **Instructor Panel**: Instructors can upload video lessons and track their approval status (approved, pending, or rejected).
- **Admin Management**: Admins can review and approve/reject lessons, manage users, and oversee platform content.
- **Secure Authentication**: User registration and login handled via Firebase, including Google Authentication.
- **Payment System**: Integrated payment flow for purchasing classes.
- **Responsive UI**: Designed for seamless use across desktop and mobile devices.
- **Real-Time Updates**: Firebase integration ensures real-time feedback and smooth user experience.

## 🛠 Tech Stack

- **Frontend**: React, JavaScript, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication & Real-Time**: Firebase, Google OAuth
- **State & Communication**: Context API, Axios

## 🚀 Getting Started

1. Clone the repository
2. Run `npm install` for both client and server
3. Add your Firebase credentials and MongoDB connection URI
4. Run the development servers
    ```bash
    cd client
    npm start
    # in another terminal
    cd server
    npm run dev
    ```

## 📄 License

This project was developed as part of a college course and is intended for learning and demonstration purposes.
