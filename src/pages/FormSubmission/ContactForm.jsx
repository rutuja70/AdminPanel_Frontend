import { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts data from backend API on component mount
    axios.get('https://adminpanel-backend-ntkm.onrender.com/getContacts')
      .then(response => setContacts(response.data))
      .catch(err => console.error('Error fetching contacts:', err));
  }, []);

  const handleSendMail = (email) => {
    // Implement your logic for sending mail here
    console.log(`Sending mail to ${email}`);
  };

  const handleDeleteContact = async (contactId, name) => {
    if (window.confirm(`Are you sure you want to delete the contact for ${name}?`)) {
      try {
        // Send delete request to backend API
        await axios.delete(`https://adminpanel-backend-ntkm.onrender.com/deleteContact/${contactId}`);

        // Update local state immediately (optimistic update)
        const updatedContacts = contacts.filter(contact => contact._id !== contactId);
        setContacts(updatedContacts);
      } catch (err) {
        console.error('Error deleting contact:', err);
        // Handle errors appropriately (e.g., display an error message to the user)
      }
    } else {
      // User cancelled deletion
      console.log('Deletion cancelled');
    }
  };

  return (
    <div className="container mx-auto">
      <div className='bg-gray-700 h-20 flex items-center justify-center mb-10'>
        <h1 className='text-center text-white text-3xl font-black'>Contact Form</h1>
      </div>
      
      <div className="overflow-x-auto">
        <div className="max-w-full mx-auto">
          <div className="overflow-hidden">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {contacts.map(contact => (
                  <tr key={contact._id} className="bg-white">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contact.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{contact.mobile}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{contact.email}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{contact.address}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{contact.type}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                      <button onClick={() => handleSendMail(contact.email)} className="inline-block bg-indigo-500 text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Send Mail</button>
                      <button onClick={() => handleDeleteContact(contact._id, contact.name)} className="inline-block bg-red-500 text-white px-3 py-1 rounded-md text-xs font-medium ml-2 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
