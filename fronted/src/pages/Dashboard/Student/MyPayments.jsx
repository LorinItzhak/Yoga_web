import React from "react";

const payments = [
  { id: 1, amount: 50, transactionId: "65f0e0cb41dad283279aa5b3" },
  { id: 2, amount: 90, transactionId: "65f0e0cb41dad283279aa5b6" },
  { id: 3, amount: 50, transactionId: "65f0e0cb41dad283279aa5b4" },
  { id: 4, amount: 170, transactionId: "65f0e0cb41dad283279aa5b5" },
  { id: 5, amount: 170, transactionId: "65f0e0cb41dad283279aa5b5" },
];

const totalPaid = payments.reduce((acc, payment) => acc + payment.amount, 0);

const MyPayments = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-2">
        My <span className="text-blue-600">Payment History</span>
      </h1>
      <p className="text-center text-gray-500 mb-6">
        You can see your payment history here
      </p>

      <div className="text-center mb-4">
        <p className="font-semibold">Total Payments: {payments.length}</p>
        <p className="font-semibold">
          Total Paid: <span className="text-blue-600">${totalPaid}</span>
        </p>
      </div>

      <table className="w-full text-center border border-gray-300 rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Transaction ID</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={payment.id}>
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">${payment.amount}</td>
              <td className="border p-2 text-sm break-words">
                {payment.transactionId}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPayments;
