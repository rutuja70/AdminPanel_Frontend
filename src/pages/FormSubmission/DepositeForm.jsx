import { useState, useEffect } from 'react';
import axios from 'axios';

function DepositeForm() {
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    axios.get('https://adminpanel-backend-ntkm.onrender.com/getDeposits')
      .then(deposits => setDeposits(deposits.data))
      .catch(err => console.log(err));
  }, []);

  const handleSendMail = (email) => {
    // Implement your logic for sending mail here
    console.log(`Sending mail to ${email}`);
  };

  const handleDeleteDeposit = async (depositId) => {
    if (window.confirm(`Are you sure you want to delete the deposit for ${depositId}?`)) {
      try {
        await axios.delete(`https://adminpanel-backend-ntkm.onrender.com/deleteDeposit/${depositId}`);

        // Update local state immediately (optimistic update)
        const updatedDeposits = deposits.filter(deposit => deposit._id !== depositId); // Assuming `_id` for deposit identification
        setDeposits(updatedDeposits);
      } catch (err) {
        console.error('Error deleting deposit:', err);
        // Handle errors appropriately (e.g., display an error message to the user)
      }
    } else {
      // User canceled deletion
      console.log('Deletion cancelled');
    }
  };

  return (
    <div className="container mx-auto">
      <div className='bg-gray-700 h-20 flex items-center justify-center mb-10'>
        <h1 className='text-center text-white text-3xl font-black'>Deposit Form</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Name</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Mobile No</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Email</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Address</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Type</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {deposits.map(deposit => (
              <tr key={deposit.id}>
                <td className="px-4 py-3">{deposit.name}</td>
                <td className="px-4 py-3">{deposit.mobile}</td>
                <td className="px-4 py-3">{deposit.email}</td>
                <td className="px-4 py-3">{deposit.address}</td>
                <td className="px-4 py-3">{deposit.accountType}</td>
                <td className="px-4 py-3 flex justify-around">
                  <button onClick={() => handleSendMail(deposit.email)} className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Send Mail</button>
                  <button onClick={() => handleDeleteDeposit(deposit._id)} className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepositeForm;
