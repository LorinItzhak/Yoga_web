import React from "react";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt, BiLogInCircle, BiSelectMultiple } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsFillPostcardFill } from "react-icons/bs";
import { TbBrandAppleArcade } from "react-icons/tb";
import {
  MdExplore,
  MdOfflineBolt,
  MdPayments,
  MdPendingActions,
} from "react-icons/md";
import { GiFigurehead } from "react-icons/gi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { IoSchoolSharp } from "react-icons/io5";
import { SiGoogleclassroom, SiInstructure } from "react-icons/si";
import { IoMdDoneAll } from "react-icons/io";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Scroll from "../hooks/useScroll";
import { HashLoader } from "react-spinners";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const notify = () => toast("Wow so easy!");
    

const adminNavItems = [
  {
    to: "/dashboard/admin-home",
    label: "Dashboard Home",
    icon: <BiHomeAlt className="text-2xl" />,
  },
  {
    to: "/dashboard/manage-users",
    label: "Manage Users",
    icon: <FaUsers className="text-2xl" />,
  },
  {
    to: "/dashboard/manage-classes",
    label: "Manage Classes",
    icon: <BsFillPostcardFill className="text-2xl" />,
  },
  {
    to: "/dashboard/manage-applications",
    label: "Applications",
    icon: <TbBrandAppleArcade className="text-2xl" />,
  },
];

const instructorNavItems = [
  {
    to: "/dashboard/instructor-cp",
    label: "Dashboard Home",
    icon: <BiHomeAlt className="text-2xl" />,
  },
  {
    to: "/dashboard/add-class",
    label: "Add a class",
    icon: <MdExplore className="text-2xl" />,
  },
  {
    to: "/dashboard/my-classes",
    label: "My Classes",
    icon: <IoSchoolSharp className="text-2xl" />,
  },
  {
    to: "/dashboard/my-pending",
    label: "Pending classes",
    icon: <MdPendingActions className="text-2xl" />,
  },
  {
    to: "/dashboard/my-approved",
    label: "Approved classes",
    icon: <IoMdDoneAll className="text-2xl" />,
  },
];

const students = [
  {
    to: "/dashboard/student-cp",
    label: "Dashboard",
    icon: <BiHomeAlt className="text-2xl" />,
  },
  {
    to: "/dashboard/enrolled-class",
    label: "My Enrolled ",
    icon: <SiGoogleclassroom className="text-2xl" />,
  },

  {
    to: "/dashboard/my-selected",
    label: "My Selected ",
    icon: <BiSelectMultiple className="text-2xl" />,
  },
  {
    to: "/dashboard/my-payments",
    label: "Payment History",
    icon: <MdPayments className="text-2xl" />,
  },
  {
    to: "/dashboard/apply-instructor",
    label: "Apply For Instructor",
    icon: <SiInstructure className="text-2xl" />,
  },
];

const lastMenuItems = [
  {
    to: "/",
    label: "Main Home",
    icon: <BiHomeAlt className="text-2xl" />,
  },
  {
    to: "/trending",
    label: "Trending",
    icon: <MdOfflineBolt className="text-2xl" />,
  },
  {
    to: "/browse",
    label: "Following",
    icon: <GiFigurehead className="text-2xl" />,
  },
  {
    to: "/",
    label: "Main Home",
    icon: <BiHomeAlt className="text-2xl" />,
  },
];

// const openPageInToast = (path) => {
//   const toastId = toast.info(
//     <iframe
//       src={path}
//       title="Content"
//       style={{
//         width: "100%",
//         height: "400px",
//         border: "none",
//         animation: "slideIn 0.5s ease-out", // אפקט סלייד
//       }}
//     />,
//     {
//       position: "top-left",
//       autoClose: false,
//       hideProgressBar: true,
//       closeOnClick: false,
//       draggable: false,
//       closeButton: true,
//       className:" flex justify-center items-center h-screen",
//       style: {
//         // flex ,justify-center, items-center ,h-screen
//         minWidth: "500px",
//         maxBlockSize:"h-screen",
//         marginLeft: "80%",
//         maxWidth: "600px",
//         borderRadius: "8px",
//         boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//         overflow: "hidden",
//       },
//       onClose: () => {
//         const toastElement = document.querySelector(".Toastify__toast");
//         if (toastElement) {
//           toastElement.style.animation = "slideOut 0.5s ease-in"; // אפקט יציאה
//         }
//       },
//     }
//   );

//   // סגירה אוטומטית אחרי 5 שניות (אופציונלי)
//   // setTimeout(() => {
//   //   toast.dismiss(toastId);
//   // }, 5000);
// };



const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const { Loader, logout } = useAuth();
  const { currentUser } = useUser();
  const navigate = useNavigate();
  const role = currentUser?.role;

  const handleLogout = () => {
    // logout();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout Me!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
          .then(
            Swal.fire({
              title: "Logout successfull!",
              // text: "Your file has been deleted.",
              icon: "success",
            })
          )
          .catch((error) => {
            console.log(error);
          });
      }
      navigate("/");
    });
  };

  //   const role = "user";

  if(Loader){  
    return <div className='flex justify-center items-center h-screen'><HashLoader  color="#FF1949 "  size={50} /></div>
}

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72 overflow-y-auto" : "w-[90vw] overflow-auto"
        } bg-white h-screen p-5 md:block hidden pt-8 relative duration-300`}
      >
        <div className="flex items-center gap-x-4">
          <img
            onClick={() => setOpen(!open)}
            src="/yoga-logo.png"
            alt=""
            className={`flex h-[40px] duration-500 cursor-pointer ${
              open && "rotate-[360deg]"
            }`}
          />

          <Link to="/ ">
            <h1
              onClick={() => setOpen(!open)}
              className={`text-dark-primary cursor-pointer font-bold origin-left text-xl duration-200 ${
                !open && "scale-0"
              } `}
            >
              Yoga Master
            </h1>
          </Link>
          
        </div>

        {/* Navlinks */}

        {/* admin role */}
        {role === "admin" && (
          <ul className="pt-6">
            <p className={`ml-3 text-gray-500 ${!open && "hidden"}`}>
              <small>MENU</small>
            </p>

            {role === "admin" &&
              adminNavItems.map((menuItem, index) => (
                <li key={index} className="mb-2">
                  <NavLink
                  
                    to={menuItem.to}
                    className={({ isActive }) =>
                      `flex ${
                        isActive ? "bg-red-500 text-white" : "text-[#413F4F]"
                      } duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`
                    }
                  >
                    {menuItem.icon}
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {menuItem.label}
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>
        )}

        {/* instructor role */}
        {role === "instructor" && (
          <ul className="pt-6">
            <p className={`ml-3 text-gray-500 ${!open && "hidden"}`}>
              <small>MENU</small>
            </p>

            {role === "instructor" &&
              instructorNavItems.map((menuItem, index) => (
                <li key={index} className="mb-2">
                  <NavLink
                    to={menuItem.to}
                    className={({ isActive }) =>
                      `flex ${
                        isActive ? "bg-red-500 text-white" : "text-[#413F4F]"
                      } duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`
                    }
                  >
                    {menuItem.icon}
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {menuItem.label}
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>
        )}

        {/* student role */}
        {role === "user" && (
          <ul className="pt-6">
            <p className={`ml-3 text-gray-500 ${!open && "hidden"}`}>
              <small>MENU</small>
            </p>

            {role === "user" &&
              students.map((menuItem, index) => (
                <li key={index} className="mb-2">
                  <NavLink
                  onClick={() => openPageInToast(menuItem.to)}
                    to={menuItem.to}
                   
                    className={({ isActive }) =>
                      `flex ${
                        isActive ? "bg-red-500 text-white" : "text-[#413F4F]"
                      } duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`
                    }
                    
                  >
                    {menuItem.icon}
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-200`}
                    >
                      {menuItem.label}
                    </span>
                  </NavLink>
                </li>
              ))}
          </ul>
        )}

        <ul className="pt-6">
          <p
            className={`ml-3 text-gray-500 mb-3 uppercase ${!open && "hidden"}`}
          >
            <small>Usefull Links</small>
          </p>
          {lastMenuItems.map((menuItem, index) => (
            <li key={index} className="mb-2">
              <NavLink
                to={menuItem.to}
                className={({ isActive }) =>
                  `flex ${
                    isActive ? "bg-red-500 text-white" : "text-[#413F4F]"
                  } duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4`
                }
              >
                {menuItem.icon}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menuItem.label}
                </span>
              </NavLink>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleLogout()}
              className="flex  duration-150 rounded-md p-2 cursor-pointer hover:bg-secondary hover:text-white font-bold text-sm items-center gap-x-4"
            >
              <BiLogInCircle className="text-2xl" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                logout
              </span>
            </button>
          </li>
        </ul>
      </div>

      <div className="h-screen overflow-y-auto px-8 flex-1">
        <Scroll/>
        <Outlet/>
        {/* <ToastContainer /> */}

      </div>
    </div>
  );
};

export default DashboardLayout;
