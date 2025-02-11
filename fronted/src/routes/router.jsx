import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import SingleClass from "../pages/Classes/SingleClass";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard"; 
import StudentCP from "../pages/Dashboard/Student/StudentCP";
import InstructorCP from "../pages/Dashboard/Instructor/InstructorCP";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageApplications from "../pages/Dashboard/Admin/ManageApplications";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses";
import PendingClasses from "../pages/Dashboard/Instructor/PendingClasses";
import ApprovedClasses from "../pages/Dashboard/Instructor/ApprovedClasses";
import EnrolledClass from "../pages/Dashboard/Student/Enroll/EnrolledClass";
import MySelected from "../pages/Dashboard/Student/MySelected";
import MyPayments from "../pages/Dashboard/Student/MyPayments";
import ApplyInstructor from "../pages/Dashboard/Student/ApplyInstructor";
import UpdateUser from "../pages/Dashboard/Admin/UpdateUser";
import { ToastContainer } from "react-toastify";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/class/:id",
        element: <SingleClass />,
        loader: async ({params}) => fetch(`http://localhost:3000/class/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },

      // Admin routes
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "manage-classes",
        element: <ManageClasses />,
      },
      {
        path: "manage-applications",
        element: <ManageApplications />,
      },
      {
        path: "update-user/:id", 
        element: <UpdateUser />,
        loader:  ({params}) => fetch (`http://localhost:3000/users/${params.id}`),
      },

      // Instructor routes
      {
        path: "instructor-cp",
        element: <InstructorCP />,
      },
      {
        path: "add-class",
        element: <AddClass />,
      },
      {
        path: "my-classes",
        element: <MyClasses />,
      },
      {
        path: "my-pending",
        element: <PendingClasses />,
      },
      {
        path: "my-approved",
        element: <ApprovedClasses />,

      },

      // Student routes
      {
        path: "student-cp",
        element: <StudentCP />,
      },
      {
        path: "enrolled-class",
        element: <EnrolledClass />,
        
      },
      {
        path: "my-selected",
        element: <MySelected />,
      },
      {
        path: "my-payments",
        element: <MyPayments />,
      },
      {
        path: "apply-instructor",
        element: <ApplyInstructor />,
      },
    ],
  },
]);