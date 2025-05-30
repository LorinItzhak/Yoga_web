import React, { useState } from "react";
import { use } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSeciure";
import useUser from "../../../hooks/useUser";

  
const KEY = import.meta.env.VITE_IMG_TOKEN;
const AddClass = () => {
  const API_URL = `https://api.imgbb.com/1/upload?key=${KEY}&name=`; 
  const axiosSeciure = useAxiosSecure();
  const { currentUser, isLoading } = useUser();
  const [img, setImg] = useState(null);

  // const [formData, setFormData] = useState({
  //   className: "",
  //   instructorName: "",
  //   instructorEmail: "",
  //   availableSeats: "",
  //   price: "",
  //   youtubeLink: "",
  //   description: "",
  //   thumbnail: null,
  // });


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const newData = Object.fromEntries(formData);
    formData.append("file", img);
    console.log(newData);

    fetch(API_URL, {
      method: "POST",
      body: formData,
    }
    ).then((res) => res.json()).then((data) => { 
      console.log(data);
      if(data.success === true){
        console.log(data.data.display_url);
        newData.image= data.data.display_url;
        newData.instructorName = currentUser?.name;
        newData.instructorEmail = currentUser?.email; 
        newData.status = "pending";
        newData.submitted= new Date();
        newData.totalEnrolled= 0;
         axiosSeciure.post("/new-class ", newData).then((res) => {
          alert("Class added successfully");
          console.log(res.data );
         });
      }
    }).catch((err) => {
      console.log(err);
    }
    ); 

  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
    };

    if (isLoading) {
      return (
        <div>Loading...
        </div>
      );
    }
 



 

  return (
    <div className=" w-fit-content mx-auto p-4">
      <div className="my-10 ">
        <h1 className=" text-center text-3xl font-bold ">Add Your Class</h1>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto   bg-white p-6 rounded shadow">
        <div className="grid grid-cols-2 w-full gap-3 items-center">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block  text-gray-700 font-bold mb-2"
            >
              Class name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-blue-500"
              placeholder="Your Class Name"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-gray-700 font-bold mb-2"
            >
              Class Thumbnail
            </label>
            <input
              type="file"
              name="image"
              id="image"
              onChange={handleImageChange}
              className="block mt-[5px] w-full  border border-secondary shadow-sm rounded-md text-sm focus:z-10 focus:border-ring-blue-500 file:bg-secondary file:border-0 file:text-white file:mr-4 file:py-3 file:px-4"
              required
            />
          </div>
        </div>

        <div>
          <h1 className="text-[12px] my-2 ml-2 text-secondary">
            You can not change your email or name
          </h1>
          <div className="grid grid-cols-2 gap-3 ">
            <div className="mb-6">
              <label
                htmlFor="instructorName"
                className="block text-gray-700 font-bold mb-2"
              >
                Instructor name
              </label>
              <input
                type="text"
                name="instructorName"
                defaultValue={currentUser?.name}
                readOnly
                disabled
                className="  w-full px-4 py-2  border border-secondary  rounded-md  focus:outline-none focus:border-ring-blue-500 "
                placeholder="Instructor Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="instructorEmail"
                className="block text-gray-700 font-bold mb-2"
              >
                Instructor email
              </label>
              <input
                title="Yoc can not change your email"
                type="email"
                name="instructorEmail"
                defaultValue={currentUser?.email}
                readOnly
                disabled
                className="  w-full px-4 py-2  border border-secondary  rounded-md  focus:outline-none focus:border-ring-blue-500 "
                placeholder="Instructor Email"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-3 items-center">
          <div className="mb-6">
            <label
              htmlFor="availableSeats"
              className="block text-gray-700 font-bold mb-2"
            >
              Available seats
            </label>
            <input
              required
              type="number"
              name="availableSeats"
              id="availableSeats"
              className="  w-full px-4 py-2  border border-secondary  rounded-md  focus:outline-none focus:border-ring-blue-500 "
              placeholder="How many seats are available?"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              required
              type="number"
              name="price"
              id="price"
              className="  w-full px-4 py-2  border border-secondary  rounded-md  focus:outline-none focus:border-ring-blue-500 "
              placeholder="How much does it cost?"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Youtube Link
          </label>
          <p className="text-[12px] my-2 mt-2 text-secondary">
            Only youtube videos are support
          </p>
          <input
            required
            type="text"
            name="videoLink"
            className="  w-full px-4 py-2  border border-secondary  rounded-md  focus:outline-none focus:border-ring-blue-500 "
            placeholder="Your course intro video link"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Description about your course
          </label>
          <textarea
            name="description"
            rows="4"
            placeholder="Description about your course"
            className="resize-none  w-full  border border-secondary  rounded-lg p-2 outline-none "
          ></textarea>
        </div>

        <div className="text-center w-full">
          <button
            type="submit"
            className="w-full bg-secondary text-white font-bold py-2 px-4  hover:bg-red-400 rounded duration-200"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
