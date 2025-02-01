import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useUser from "../../hooks/useUser";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import useAxiosSecure from "../../hooks/useAxiosSeciure";
import girlImage from "../../assets/home/girl.jpg";
import { FaFacebook, FaInstagram, FaLanguage, FaLevelUpAlt, FaTwitter, FaUser, FaUsers } from "react-icons/fa";
import { MdBookOnline } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { useEffect } from "react";


const SingleClass = () => {
  const course = useLoaderData(); // נתוני הקורס מגיעים דרך react-router
  const { currentUser } = useUser(); // נתוני משתמש נוכחי
  const role = currentUser?.role; // תפקיד המשתמש
  const [relatedCourses, setRelatedCourses] = useState([]);
  const axiosFetch = useAxiosFetch();
  const axiosSecure = useAxiosSecure();

  // Fetch related courses (דוגמה איך למשוך נתונים דינמיים)
  React.useEffect(() => {
    const fetchRelatedCourses = async () => {
      const response = await axiosFetch("/related-courses");// נתיב דינמי למידע על קורסים קשורים  (/relate-courser)
      console.log(response.data); 
      setRelatedCourses(response.data);
    };
    fetchRelatedCourses();
  }, [axiosFetch]);

  return (
    <div
      className="font-gilory font-medium text-gray dark:text-white text-lg leading-[27px] w-[90%] mx-auto "
      data-new-gr-c-s-check-loaded="14.1157.0"
      data-gr-ext-installed=""
      >
      {/* Breadcrumb/Header */}
      <div
        className=" breadcrumbs bg-purple-500 py-20 mt-20 section-padding bg-cover bg-center bg-no-repeat"
        // style={{ backgroundImage: `url(${course.image || 'https://via.placeholder.com/800x400'})` }}
      >
        <div className="container text-center">
          <h2> Course Details</h2>
        </div>
      </div>

      <div className="nav-tab-wrapper tabs section-padding mt-8">
        <div className="container">
          <div className="grid grid-cols-12 md:gap-[30px]">
            {/* Left side */}
            <div className="lg:col-span-8 col-span-8">
              <div className="single-course-details">
                <div className="xl:h-[470px] h-[350px] mb-10 course-main-thumb">
                  <img
                    src={course?.image}
                    alt=""
                    className="rounded-md object-fut w-full h-full block"
                  />
                </div>
                <h2 className="text-2xl mb-2">{course?.name} </h2>
                <div className="author-meta mt-6 sm:flex lg:space-x-16 sm:space-x-5 space-y-5 sm:space-y-0 items-center">
                  <div className="flex space-x-4 items-center group">
                    <div className="flex-none">
                      <div className="h-12 w-12 rounded">
                        <img
                          src={
                            "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
                          }
                          alt=""
                          className="rounded-full object-cover w-full h-full block"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-secondary">
                        Trainer
                        <a href="#" className="text-black">
                          : {course.instructorName}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-secondary">
                      Last Update:
                      <a href="#" className="text-black ml-1">
                        {new Date(course.submitted).toLocaleDateString()}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="nav-tab-wrapper mt-12">
                  <ul id="tabs-nav" className="course-tab mb-8">
                    <li className="active">
                      <a href="#tab1">Overview</a>
                    </li>
                    <li>
                      <a href="#tab2">Curriculum</a>
                    </li>
                    <li>
                      <a href="#tab3">Instructor</a>
                    </li>
                    <li>
                      <a href="#tab4">Reviews</a>
                    </li>
                  </ul>
                  <div id="tabs-content">
                    <div id="tab1" className="tab-content">
                      <h3 className="text-2xl mt-8">Course Description</h3>
                      <p className="mt-4">
                        This tutorial will help you learn quickly and
                        thoroughly. Lorem ipsum, or lipsum as it sometimes
                        known, is dummy text used in laying out print, graphic
                        or web designs. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Donec odio. Quisque volutpat mattis
                        eros.
                        <br />
                        <br />
                        You’ll be exposed to principles and strategies, but,
                        more importantly, you’ll learn how actually apply these
                        abstract concepts by coding three different websites for
                        three very different audiences. Lorem ipsum is dummy
                        text used in laying out print, graphic or web designs
                        Lorem ipsum blinding shot chinwag knees.
                      </p>
                      <div className="bg-[#F8F8F8] dark:bg-indigo-500 space-y-6 p-8 rounded-md my-8">
                        <h4 className="text-2xl">What You Will Learn?</h4>
                        <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                          <li className="flex space-x-3">
                            <div className="flex-none relative top-1">
                              <img src="/correct-mark.png" alt="" />
                            </div>
                            <div className="flex-1">
                              Learn how perspective works and how to incorporate
                              your art
                            </div>
                          </li>
                          <li className="flex space-x-3">
                            <div className="flex-none relative top-1">
                              <img src="/correct-mark.png" alt="" />
                            </div>
                            <div className="flex-1">
                              Learn how perspective works and how to incorporate
                              your art
                            </div>
                          </li>
                          <li className="flex space-x-3">
                            <div className="flex-none relative top-1">
                              <img src="/correct-mark.png" alt="" />
                            </div>
                            <div className="flex-1">
                              Learn how perspective works and how to incorporate
                              your art
                            </div>
                          </li>
                          <li className="flex space-x-3">
                            <div className="flex-none relative top-1">
                              <img src="/correct-mark.png" alt="" />
                            </div>
                            <div className="flex-1">
                              Learn how perspective works and how to incorporate
                              your art
                            </div>
                          </li>
                          <li className="flex space-x-3">
                            <div className="flex-none relative top-1">
                              <img src="/correct-mark.png" alt="" />
                            </div>
                            <div className="flex-1">
                              Learn how perspective works and how to incorporate
                              your art
                            </div>
                          </li>
                          <li className="flex space-x-3">
                            <div className="flex-none relative top-1">
                              <img src="/correct-mark.png" alt="" />
                            </div>
                            <div className="flex-1">
                              Learn how perspective works and how to incorporate
                              your art
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-2xl">What You Will Learn?</h4>
                        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                          <div className="bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center">
                            <span className="flex-none">
                              <img src="/logo.png" alt="" />
                            </span>
                            <span className="flex-1 text-black">
                              Computer/Mobile
                            </span>
                          </div>
                          <div className="bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center">
                            <span className="flex-none">
                              <img src="/logo.png" alt="" />
                            </span>
                            <span className="flex-1 text-black">
                              Paper &amp; Pencil
                            </span>
                          </div>
                          <div className="bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center">
                            <span className="flex-none">
                              <img src="/logo.png" alt="" />
                            </span>
                            <span className="flex-1 text-black">
                              Internet Connect
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab2" className="tab-content">
                    <h3 className="text-2xl mt-8">Lesson Plan</h3>
                    <p className="mt-4">
                      This tutorial will help you learn quickly and thoroughly.
                      Lorem ipsum, or lipsum as it sometimes known, is dummy
                      text used in laying out print, graphic or web designs.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec odio. Quisque volutpat mattis eros.
                      <br />
                      <br />
                      You’ll be exposed to principles and strategies, but, more
                      importantly, you’ll learn how actually apply these
                      abstract concepts by coding three different websites for
                      three very different audiences. Lorem ipsum is dummy text
                      used in laying out print, graphic or web designs Lorem
                      ipsum blinding shot chinwag knees.
                    </p>
                    <div className="bg-[#F8F8F8] dark:bg-indigo-500 space-y-6 p-8 rounded-md my-8">
                      <h4 className="text-2xl">This Course is For Beginners</h4>
                      <div className="mt-4">
                        <h4 className="text-2xl">What You Will Learn?</h4>
                        <p className="mt-4">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Saepe repellendus voluptate eos molestiae fuga
                          do it ipsam nemo tenetur quod eaque error voluptatibus
                          sapiente quis quaerat veniam, reprehenderit dolorum
                          nisi in. Adipisci, ipsum possimus sapiente minus
                          facere est? Dolore necessitatibus eaque dolores magnam
                          explicabo delectus harum aperiam animi! Fuga sapiente
                          doloribus blanditiis rerum? Lorem ipsum dolor sit amet
                          consectetur adipisicing elit. Omnis ab esse adipisci
                          earum laboriosam eos fugit eius temporibus architecto
                          hic reprehenderit ducimus soluta maxime sunt numquam
                          quo consectetur, facere pariatur?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="lg:col-span-4 col-span-12 mt-8 md:mt-0">
              <div className="sidebarwrapper space-y-[30px]">
                {/* Course Image */}
                <div className="widget custom-text space-y-5">
                  <a className="h-[220px] rounded relative block" href="#">
                    <img
                      src={course.image}
                      alt=""
                      className="block w-full h-full object-cover rounded"
                    />
                    <img
                      src="/play.png"
                      alt=""
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </a>

                  {/* Course Price */}
                  <h3 className="text-secondary">${course.price}</h3>

                  {/* Enroll Button */}
                  <button
                    onClick={() => handleSelect(course._id)}
                    title={
                      role === "admin" || role === "instructor"
                        ? "Instructor/Admin Cannot select classes"
                          ? course.availableSeats < 1
                          : "No seat available"
                        : "You can select classes"
                    }
                    disabled={
                      role === "admin" ||
                      role === "instructor" ||
                      course.availableSeats < 1
                    }
                    className="btn btn-primary w-full text-center bg-secondary py-2 px-6 text-white"
                  >
                    Enroll Now
                  </button>

                  {/* Course Details List */}
                  <ul className="list">
                    <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                      <div className="flex-1 space-x-3 flex items-center">
                        <FaUser className="inline-flex" />

                        <div className="text-black font-semibold">
                          Instructor
                        </div>
                      </div>
                      <div className="flex-none">{course.instructorName}</div>
                    </li>
                    <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                      <div className="flex-1 space-x-3 flex items-center">
                        <MdBookOnline />

                        <div className="text-black font-semibold">Lectures</div>
                      </div>
                      <div className="flex-none">23</div>
                    </li>
                    <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                      <div className="flex-1 space-x-3 flex items-center">
                        <BiTime />

                        <div className="text-black font-semibold">Duration</div>
                      </div>
                      <div className="flex-none">3H 36Minutes</div>
                    </li>
                    <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                      <div className="flex-1 space-x-3 flex items-center">
                        <FaUsers />

                        <div className="text-black font-semibold">Enrolled</div>
                      </div>
                      <div className="flex-none">2K</div>
                    </li>
                    <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                      <div className="flex-1 space-x-3 flex items-center">
                        <FaLevelUpAlt />

                        <div className="text-black font-semibold">
                          Course level
                        </div>
                      </div>
                      <div className="flex-none">Intermediate</div>
                    </li>
                    <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                      <div className="flex-1 space-x-3 flex items-center">
                        <FaLanguage />

                        <div className="text-black font-semibold">Language</div>
                      </div>
                      <div className="flex-none">English</div>
                    </li>
                  </ul>
                    {/* Share on */}
                  <div className="mt-6 flex flex-initial">
                  <h4 className="text-lg font-bold mb-2 m-1">Share On:</h4>
                  <div className="flex space-x-2 m-2 ">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                      <FaFacebook className="text-blue-600 text-xl" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                      <FaTwitter className="text-blue-400 text-xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer">
                      <FaInstagram className="text-pink-600 text-xl" />
                    </a>
                  </div>
                </div>
                {/* Related Courses */}
                
                <div >
  <h4 className="text-lg font-bold mb-4 mt-8">Related Courses</h4>
  {relatedCourses.length > 0 ? (
    relatedCourses.map((relatedCourse) => (
      <div key={relatedCourse._id} className="flex items-center space-x-4 mb-4">
        <img
          src={relatedCourse?.image}
          alt={relatedCourse?.name}
          className="w-16 h-16 rounded"
        />
        <div>
          <h5 className=" ">{relatedCourse?.name}</h5>
          <p className="text-sm text-secondary">${relatedCourse?.price}</p>
        </div>
      </div>
    ))
  ) : (
    <p> No Related Courses</p>
  )}
</div>

                </div>
              </div>

              {/* Right Column */}
              {/* <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6"> */}
              {/* <h3 className="text-lg font-semibold">Course Details</h3>
          <ul className="mt-4 space-y-2">
          <li className="flex justify-between">
              <span>Instructor:</span> <span>{course.instructorName || "N/A"}</span>
            </li>
            <li className="flex justify-between">
              <span>Lectures:</span> <span>{course.lectures || "N/A"}</span>
            </li>
            <li className="flex justify-between">
              <span>Duration:</span> <span>{course.duration || "N/A"}</span>
            </li>
            <li className="flex justify-between">
              <span>Enrolled:</span>{" "}
              <span>{course.totalEnrolled || "N/A"}</span>
            </li>
            <li className="flex justify-between">
              <span>Course Level:</span> <span>{course.level || "N/A"}</span>
            </li>
            <li className="flex justify-between">
              <span>Language:</span> <span>{course.language || "N/A"}</span>
            </li>
          </ul>
          <div className="mt-6">
            {role === "admin" || role === "instructor" ? (
              <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                Manage Course
              </button>
            ) : (
              <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Enroll Now
              </button>
            )}
          </div>
        </div>
      </div> */}

              {/* Related Courses */}
              {/* <div className="container mx-auto mt-12"> */}
              {/* <h3 className="text-xl font-bold mb-4">Related Courses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCourses.map((relatedCourse, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <h4 className="font-semibold">{relatedCourse.title}</h4>
              <p className="text-gray-600">{relatedCourse.price}</p>
            </div>
          ))}
        </div>
      </div> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default SingleClass;
