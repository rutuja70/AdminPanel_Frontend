import { useState, useEffect } from 'react';
import axios from 'axios';

function JobForm() {
  const [jobProfiles, setJobProfiles] = useState([]);

  useEffect(() => {
    axios.get('https://adminpanel-backend-ntkm.onrender.com/getJobProfile')
      .then(jobProfiles => setJobProfiles(jobProfiles.data))
      .catch(err => console.log(err));
  }, []);

  const handleSendMail = (email) => {
    // Implement your logic for sending mail here
    console.log(`Sending mail to ${email}`);
  };

  const handleDeleteJobProfile = async (jobProfileId) => {
    if (window.confirm(`Are you sure you want to delete the job profile for ${jobProfileId}?`)) {
      try {
        await axios.delete(`https://adminpanel-backend-ntkm.onrender.com/deleteJobProfile/${jobProfileId}`);

        // Update local state immediately (optimistic update)
        const updatedJobProfiles = jobProfiles.filter(jobProfile => jobProfile._id !== jobProfileId); // Assuming `_id` for job profile identification
        setJobProfiles(updatedJobProfiles);
      } catch (err) {
        console.error('Error deleting job profile:', err);
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
        <h1 className='text-center text-white text-3xl font-black'>Job Form</h1>
      </div>
      <div className="overflow-x-auto w-[90%] m-auto">
        <table className="mx-auto max-w-full w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Name</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Mobile No</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Address</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Email</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">10th %</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">12th %</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Graduation Grade</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Post Graduation Grade</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Experience</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Job Profile</th>
              <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm uppercase border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {
              jobProfiles.map(jobProfile => {
                return (
                  <tr key={jobProfile.id}>
                    <td className="px-4 py-3">{jobProfile.name}</td>
                    <td className="px-4 py-3">{jobProfile.mobile}</td>
                    <td className="px-4 py-3">{jobProfile.address}</td>
                    <td className="px-4 py-3">{jobProfile.email}</td>
                    <td className="px-4 py-3">{jobProfile.tenthPercentage}</td>
                    <td className="px-4 py-3">{jobProfile.twelfthPercentage}</td>
                    <td className="px-4 py-3">{jobProfile.graduationGrade}</td>
                    <td className="px-4 py-3">{jobProfile.postGraduationGrade}</td>
                    <td className="px-4 py-3">{jobProfile.experience}</td>
                    <td className="px-4 py-3">{jobProfile.jobProfile}</td>
                    <td className="px-4 py-3 flex justify-around">
                      <button onClick={() => handleSendMail(jobProfile.email)} className="text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Send Mail</button>
                      <button onClick={() => handleDeleteJobProfile(jobProfile._id)} className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded text-sm">Delete</button>
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

export default JobForm;
