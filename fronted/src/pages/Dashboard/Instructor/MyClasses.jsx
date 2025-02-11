import React, { useState, useEffect } from "react";
import useUser from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSeciure";
import moment from "moment";

const MyClasses = ({ statusFilter }) => {
  const [classes, setClasses] = useState([]);
  const { currentUser, isLoading } = useUser();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/classes/${currentUser?.email}`)
      .then((res) => {
        const filteredClasses = statusFilter
          ? res.data.filter(cls => cls.status === statusFilter)
          : res.data;
        setClasses(filteredClasses);
      })
      .catch((err) => console.log(err));
  }, [isLoading, statusFilter]);

  return (
    <div className="max-w-6xl mx-auto  px-6 ">
      {/*  title */}
      <div className="my-9 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">
          {statusFilter 
            ? `My ${statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Classes`
            : "My Classes"}
        </h1>
        <p className="text-[14px] text-gray-600 mt-2">
          {statusFilter 
            ? `Here you can see all your ${statusFilter} classes`
            : "Here you can see how many classes added by you and all classes status"}
        </p>
      </div>

      
      {classes.length === 0 ? (
        <div className="text-center text-2xl font-bold mt-10">
          No {statusFilter || ""} classes yet
        </div>
      ) : (
        <div className="space-y-6">
          {classes.map((cls, index) => (
            <div
              key={index}
              className={`bg-white flex flex-col md:flex-row rounded-lg gap-6 shadow-lg p-8  border ${
                cls.status === "approved"
                  ? "border-green-500 hover:ring ring-green-500"
                  : cls.status === "pending"
                  ? "border-orange-400 hover:ring ring-orange-400"
                  : "border-gray-200"
              }`}
            >
              {/* img */}
              <div className="flex-shrink-0">
                <img src={cls.image} alt={cls.name} className="h-48 w-64 object-cover rounded-md" />
              </div>

              {/* details */}
              <div className="flex-grow">
                <h2 className="font-bold text-[22px] text-secondary border-b pb-2 mb-2">{cls.name}</h2>
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <h1 className="font-bold mb-3">Info :</h1>
                    <p className="text-gray-700"><span className="font-semibold">Total Students :</span> {cls.totalEnrolled || 0}</p>
                    <p className="text-gray-700"><span className="font-semibold">Total Seats :</span> {cls.availableSeats}</p>
                    <p className={`font-bold ${cls.status === "approved" ? "text-green-500" : "text-orange-400"}`}>
                      {cls.status.charAt(0).toUpperCase() + cls.status.slice(1)}
                    </p>
                  </div>
                  <div>
                    <h1 className="font-bold mb-3">Details :</h1>
                    <p className="text-gray-700"><span className="font-semibold">Price :</span> ${cls.price}</p>
                    <p className="text-gray-700"><span className="font-semibold">Submitted :</span> {cls.submitted ? moment(cls.submitted).format("MMMM Do YYYY") : "Not available"}</p>
                  </div>
                </div>
              </div>

              {/* buttons */}
              <div className="flex flex-col gap-3 justify-end w-[200px]">
               
                {cls.status === "pending" && (
                  <button
                    className="px-4 py-2 bg-orange-400 text-white font-semibold rounded-md shadow-md transition duration-300 transform hover:scale-105"
                  >
                    View Feedback
                  </button>
                )}
                <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md transition duration-300 transform hover:scale-105">
                  View Details
                </button>
                <button onClick={() => navigate(`/dashboard/update/${cls._id}`)} className="px-4 py-2 bg-secondary text-white font-semibold rounded-md shadow-md transition duration-300 transform hover:scale-105">
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyClasses;
