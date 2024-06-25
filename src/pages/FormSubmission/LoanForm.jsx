import { useState, useEffect } from 'react';
import axios from 'axios';

function LoanForm() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios.get('https://adminpanel-backend-ntkm.onrender.com/getLoans')
      .then(loans => setLoans(loans.data))
      .catch(err => console.log(err));
  }, []);

  const handleSendMail = (email) => {
    // Implement your logic for sending mail here
    console.log(`Sending mail to ${email}`);

  };

  const handleDeleteLoan = async (loanId) => {
    if (window.confirm(`Are you sure you want to delete the loan for ${loanId.name}?`)) {
      try {
        await axios.delete(`https://adminpanel-backend-ntkm.onrender.com/deleteLoan/${loanId}`); // Delete request with loan ID

        // Update local state to reflect deletion (optional)
        const updatedLoans = loans.filter(loan => loan._id !== loanId);
        setLoans(updatedLoans);
      } catch (err) {
        console.error('Error deleting loan:', err);
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
            <h1 className='text-center text-white text-3xl font-black'>Loan Form</h1>
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
            {
              loans.map(loan => {
                return (
                  <tr key={loan.id}>
                    <td className="px-4 py-3">{loan.name}</td>
                    <td className="px-4 py-3">{loan.mobile}</td>
                    <td className="px-4 py-3">{loan.email}</td>
                    <td className="px-4 py-3">{loan.address}</td>
                    <td className="px-4 py-3">{loan.loanType}</td>
                    <td className="px-4 py-3 flex justify-around">
                      <button onClick={() => handleSendMail(loan.email)} className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Send Mail</button>
                      <button onClick={() => handleDeleteLoan(loan._id)} className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-sm">Delete</button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LoanForm;
