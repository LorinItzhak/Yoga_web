import React, { useState, useEffect } from "react";
import useUser from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSeciure";
import moment from "moment";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const { currentUser, isLoading } = useUser();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/classes/${currentUser?.email}`)
      .then((res) => setClasses(res.data))
      .catch((err) => console.log(err));
  }, [isLoading]);

  return (
    <div className="max-w-6xl mx-auto w-full px-6">
      {/* כותרת העמוד */}
      <div className="my-9 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">
          My <span className="text-secondary">Classes</span>
        </h1>
        <p className="text-[14px] text-gray-600 mt-2">
          Here you can see how many classes added by you and all classes status
        </p>
      </div>

      {/* בדיקה אם אין קורסים */}
      {classes.length === 0 ? (
        <div className="text-center text-2xl font-bold mt-10">
          You have not added any classes yet
        </div>
      ) : (
        <div className="space-y-6">
          {classes.map((cls, index) => (
            <div
              key={index}
              className="bg-white flex hover:ring ring-secondary flex-col md:flex-row rounded-lg gap-6 shadow-lg p-8 w-[80vw] border border-gray-200"
            >
              {/* תמונה של הקורס */}
              <div className="flex-shrink-0">
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="h-48 w-64 object-cover rounded-md"
                />
              </div>

              {/* פרטי הקורס */}
              <div className="flex-grow">
                <h2 className="font-bold text-[22px] text-secondary border-b pb-2 mb-2">
                  {cls.name}
                </h2>
                <div className="grid grid-cols-2 gap-x-6">
                  <div>
                    <h1 className="font-bold mb-3">Info :</h1>
                    <p className=" text-secondary font-semibold">
                      <span className="font-semibold text-gray-700">Total Students :</span>  {cls.totalEnrolled || 0}
                    </p>
                    <p className="text-secondary font-semibold">
                      <span className="font-semibold text-gray-700">Total Seats :</span> {cls.availableSeats}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Status :</span>{" "}
                      <span
                        className={`font-bold ${
                          cls.status === "pending"
                            ? "text-orange-400"
                            : cls.status === "checking"
                            ? "text-yellow-300"
                            : cls.status === "approved"
                            ? "text-green-500"
                            : "text-red-600"
                        }`}
                      >
                        {cls.status}
                      </span>
                    </p>
                  </div>

                  <div>
                    <h1 className="font-bold mb-3">Details :</h1>
                    <p className=" text-secondary font-semibold">
                      <span className="font-semibold text-gray-700">Price :</span> {cls.price} <span className=" text-gray-700 font-semibold"> $
                        </span> 
                    </p>
                    <p className="text-secondary font-semibold">
                      <span className="font-semibold text-gray-700">Submitted :</span>{" "}
                      {cls.submitted
                        ? moment(cls.submitted).format("MMMM Do YYYY")
                        : "Not available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* כפתורים */}
              <div className="flex flex-col gap-3 justify-end w-[200px]">
                <button
                  onClick={() => handleFeedback(cls._id)}
                  className="px-4 py-2 bg-orange-400 text-white font-semibold rounded-md shadow-md transition duration-300 transform hover:scale-105"
                >
                  View Feedback
                </button>
                <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md transition duration-300 transform hover:scale-105">
                  View Details
                </button>
                <button
                  onClick={() => navigate(`/dashboard/update/${cls._id}`)}
                  className="px-4 py-2 bg-secondary text-white font-semibold rounded-md shadow-md transition duration-300 transform hover:scale-105"
                >
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
