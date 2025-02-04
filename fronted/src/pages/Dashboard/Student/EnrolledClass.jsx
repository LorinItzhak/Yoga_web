import React from "react";

const enrolledClasses = [
  {
     
    "name": "Exercise Hacks for Women",
    "image": "https://i.ibb.co/L89HLkw/group-of-young-people-doing-yoga-on-a-yoga-mat-2021-09-02-14-56-30-utc.jpg",
    "availableSeats": 516,
    "price": "50",
    "videoLink": "https://youtu.be/UCgvZ4VkLMQ",
    "description": "Aliq is notm hendr erit a augue insu image pellen tes.",
    "instructorName": "Ema Aliq",
    "instructorEmail": "ema@aliq.com",
    "status": "approved",
    "submitted": "2024-02-28T20:01:40.168Z",
    "totalEnrolled": 4,
    "reason": null
  },
];

const EnrolledClass = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">
        Enrolled <span className="text-blue-600">Classes</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {enrolledClasses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300"
          >
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1">{course.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{course.instructorName}</p>
              <p className="font-bold mb-4">${course.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClass;
