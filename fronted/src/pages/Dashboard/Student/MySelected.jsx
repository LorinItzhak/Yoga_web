import React from "react";
import useUser from "../../../hooks/useUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSeciure";
import { useEffect } from "react";
import moment from "moment";
import { MdDeleteSweep } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import Swal from "sweetalert2";

const MySelected = () => {
  const { currentUser } = useUser();
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState([]);
  const [paginationData, setPaginationData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPage = Math.ceil(classes.length / itemsPerPage);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/cart/${currentUser?.email}`)
      .then((res) => {
        setClasses(res.data);
        // setPaginationData(res.data.slice(0,itemsPerPage));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const res = axiosSecure.Delete(`/delete-cart-item/${id}`, {
          status: "Delete",
          reason: "Deleted",
        });
        if (result.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Class has been Deleted",
            icon: "success",
          });
          const newClasses = classes.filter((item) => item._id !== id);
          setClasses(newClasses);
        }
      }
    });
  };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="my-6 text-center">
        <h1 className=" text-4xl font-bold ">
          My <span className="text-secondary">Selected</span> Classes{" "}
        </h1>
      </div>

      <div className="h-screen py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart : </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {/* left */}
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">#</th>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Date</th>
                      <th className="text-left font-semibold">Actions</th>
                    </tr>
                  </thead>
                  {/* table body */}
                  <tbody>
                    {classes.length === 0 ? (
                      <tr>
                        <td
                          colSpan="5"
                          className="text-center text-2xl font-bold"
                        >
                          No Classes Founded
                        </td>
                      </tr>
                    ) : (
                      classes.map((item, index) => {
                        const letIndex = (page - 1) * itemsPerPage + index + 1;
                        return (
                          <tr key={item._id}>
                            <td className="py-4">{letIndex}</td>
                            <td className="py-4">
                              <div className="flex items-center">
                                <img
                                  src={item.image}
                                  alt=""
                                  className="h-16 w-16 mr-4"
                                />
                                <span>{item.name}</span>
                              </div>
                            </td>
                            <td className="py-4">${item.price}</td>
                            <td className="py-4">
                              <p className="text-gray-700 text-sm">
                                {moment(item.submitted).format("MMMM Do YYYY")}
                              </p>
                            </td>
                            <td className="py-4 flex pt-8 gap-2">
                              <button
                                onClick={() => handleDelete(item._id)}
                                className="px-3 py-1 cursor-pointer bg-red-500 rounded-3xl text-white font-bold "
                              >
                                <MdDeleteSweep />
                              </button>
                              <button className="px-3 py-1 cursor-pointer bg-green-500 rounded-3xl text-white font-bold flex items-center">
                                <FiDollarSign className="mr-2" />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* right */}
            <div className="md:w-1/5 fixed right-3">right</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySelected;
