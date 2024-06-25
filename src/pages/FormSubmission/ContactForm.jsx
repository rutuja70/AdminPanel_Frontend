import { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('https://adminpanel-backend-ntkm.onrender.com/getContacts')
      .then(contacts => setContacts(contacts.data))
      .catch(err => console.log(err));
  }, []);

  const handleSendMail = (email) => {
    // Implement your logic for sending mail here
    console.log(`Sending mail to ${email}`);
  };

  const handleDeleteContact = async (contactId) => {
    if (window.confirm(`Are you sure you want to delete the contact for ${name}?`)) {
      try {
        await axios.delete(`https://adminpanel-backend-ntkm.onrender.com/deleteContact/${contactId}`);

        // Update local state immediately (optimistic update)
        const updatedContacts = contacts.filter(contact => contact._id !== contactId);
        setContacts(updatedContacts);
      } catch (err) {
        console.error('Error deleting contact:', err);
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
            <h1 className='text-center text-white text-3xl font-black'>Contact Form </h1>
            </div>
      <div className="overflow-x-auto">
        <table className="mx-auto max-w-4xl w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden shadow-lg">
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
              contacts.map(contact => {
                return (
                  <tr key={contact.id} className="hover:bg-gray-100 transition-colors duration-200">
                    <td className="px-4 py-3">{contact.name}</td>
                    <td className="px-4 py-3">{contact.mobile}</td>
                    <td className="px-4 py-3">{contact.email}</td>
                    <td className="px-4 py-3">{contact.address}</td>
                    <td className="px-4 py-3">{contact.type}</td>
                    <td className="px-4 py-3 flex justify-around">
                      <button onClick={() => handleSendMail(contact.email)} className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm transition-colors duration-200">Send Mail</button>
                      <button onClick={() => handleDeleteContact(contact._id)} className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-sm transition-colors duration-200">Delete</button>
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

export default ContactForm;
