import React from "react";

const selectedClasses = []; // נתונים מדומים - ניתן להחליף בנתונים אמיתיים

const MySelected = () => {
  const subtotal = selectedClasses.reduce((acc, cls) => acc + cls.price, 0);
  const taxes = subtotal * 0.1; // מס 10%
  const extraFees = 0;
  const total = subtotal + taxes + extraFees;

  return (
    <div className="flex gap-10">
    <div className="flex flex-col items-center h-screen mt-9 ml-72 ">
      <h1 className="text-2xl font-bold mb-6">
        My <span className="text-blue-600">Selected</span> Class
      </h1>

      <div className="flex flex-col md:flex-row p-9 ">
        {/* טבלת מוצרים */}
        <div className=" flex-1 bg-white border border-gray-300 rounded-md shadow-md p-8 space-y-4">
          <h2 className="text-lg font-semibold mb-2">Shopping Cart:</h2>
          <table className=" text-center border-collapse w-max-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-4">#</th>
                <th className="border p-4">Product</th>
                <th className="border p-4">Price</th>
                <th className="border p-4">Date</th>
                <th className="border p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedClasses.length === 0 ? (
                <tr>
                  <td colSpan="5" className="border p-8 w-48 text-gray-500">
                    No Classes Found
                  </td>
                </tr>
              ) : (
                selectedClasses.map((cls, index) => (
                  <tr key={cls._id}>
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{cls.name}</td>
                    <td className="border p-2">${cls.price}</td>
                    <td className="border p-2">{cls.date}</td>
                    <td className="border p-2">
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
              </div>
              </div>
        {/* סיכום */}
        <div className="flex flex-col h-full mt-32 w-full  bg-white border border-gray-300 p-8 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Summary</h2>
          <div className="space-y-2 text-sm">
            <p>Subtotal: <strong>${subtotal.toFixed(2)}</strong></p>
            <p>Taxes: <strong>${taxes.toFixed(2)}</strong></p>
            <p>Extra Fees: <strong>${extraFees.toFixed(2)}</strong></p>
            <hr />
            <p className="font-bold text-lg">Total: ${total.toFixed(2)}</p>
          </div>
          <button className="w-full h-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>
      
              </div>
  );
};

export default MySelected;