import React from "react";
import { useState } from "react";
import useUser from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import useAxiosSeciure from "../../../hooks/useAxiosSeciure";
import { use } from "react";
import { useEffect } from "react";
import moment from "moment";

const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  const { currentUser, isLoading } = useUser();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSeciure();

  useEffect(() => {
    axiosSecure
      .get(`/classes/${currentUser?.email}`)
      .then((res) => setClasses(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, [isLoading]);

  return (
    <div className=" max-w-screen-2xl h-full w-[80vw]  ">
      <div className="my-9 flex  " style={{ flexDirection: "column" }}>
        <h1 className="text-4xl font-bold text-center">
          My <span className="text-secondary">Classes</span>
        </h1>
        <div>
          <p className="text-[12px] text-center my-2">
            Here you can see how many classes added by you and all classes
            status
          </p>
        </div>
      </div>

      <div>
        {classes.length === 0 ? (
          <div className="text-center text-2xl font-bold mt-10">
            You have not added any classes yet
          </div>
        ) : (
          <div>
            {classes.map((cls, index) => (
              <div
                key={index}
                className="mb-5 hover:ring ring-secondary duration-200 focus:ring rounded-lg"
              >
                <div className="bg-white  flex   rounded-lg gap-8 shadow p-4">
                  <div className="">
                    <img
                      src={cls.image}
                      alt=""
                      className="max-h-[200px] max-w-[300px]"
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="font-bold text-[21px] text-secondary border-b pb-2 mb-2 ">
                      {cls.name}
                    </h2>
                    <div className="w-full flex  ">
                      <div>
                        <div>
                          <h1 className="font-bold mb-3">Info : </h1>
                          <h1 className="text-secondary my-2">
                            <span className="text-black ">Total Student</span> :{" "}
                            {cls.totalEnrolled ? cls.totalEnrolled : 0}
                          </h1>
                          <h1 className="text-secondary">
                            <span className="text-black ">Total Seats</span> :{" "}
                            {cls.avaliableSeats}
                          </h1>
                          <h1 className="text-secondary my-2">
                            <span className="text-black ">Status</span> :{" "}
                            <span
                              className={`font-bold ${
                                cls.status === "pending"
                                  ? "text-orange-400"
                                  : cls.status === "checking"
                                  ? "text-yellow-300"
                                  : cls.status === "approved"
                                  ? "text-green-500"
                                  : "text-red-600"
                              } `}
                            >
                              {cls.status}
                            </span>
                          </h1>
                        </div>
                        <div>
                          <h1 className="font-bold mb-3">.....</h1>
                          <h1 className="text-secondary my-2">
                            <span className="text-black">Price :</span>{" "}
                            {cls.price}
                            <span className="text-black"> $</span>{" "}
                          </h1>
                          <h1 className="text-secondary my-2">
                            <span className="text-black">Submitted :</span>
                            <span>
                              {cls.submitted
                                ? moment(cls.submitted).format("MMMM Do YYYY")
                                : "Not Get Data"}{" "}
                            </span>
                          </h1>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <h1 className="font-bold mb-3">Action : </h1>
                        <button
                          onClick={() => handleFeedback(cls._id)}
                          className="px-3 bg-orange-400 font-bold py-1 text-white w-full rounded-lg"
                        >
                          View Feedback
                        </button>
                        <button className="px-3  bg-green-500 font-bold py-1 my-3 text-white w-full  rounded-lg">
                          View Details
                        </button>
                        <button
                          onClick={() =>
                            navigate(`/dashboard/update/${cls._id}`)
                          }
                          className="px-3  bg-secondary font-bold py-1  text-white w-full rounded-lg"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyClasses;
