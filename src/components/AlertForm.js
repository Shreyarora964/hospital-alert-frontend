  //  import React, { useState } from 'react';
  //  import axios from 'axios';

  //  const AlertForm = ({ hospitalId }) => {
  //    const [name, setName] = useState('');
  //    const [phone, setPhone] = useState('');
  //    const [location, setLocation] = useState('');
  //    const [error, setError] = useState(null);
  //    const [success, setSuccess] = useState(null);

  //    const handleSubmit = async (e) => {
  //      e.preventDefault();
  //      setError(null);
  //      setSuccess(null);

  //      if (!name || !phone || !location) {
  //        setError("All fields are required.");
  //        return;
  //      }

  //      try {
  //        await axios.post('http://localhost:8000/subscribe', {
  //          name,
  //          phone,
  //          location,
  //          hospital_id: hospitalId
  //        });
  //        setSuccess("You have been subscribed for alerts!");
  //        setName('');
  //        setPhone('');
  //        setLocation('');
  //      } catch (error) {
  //        setError("Failed to subscribe. Please try again.");
  //      }
  //    };

  //    return (
  //      <form onSubmit={handleSubmit} className="mt-4">
  //        {error && <p className="text-red-500">{error}</p>}
  //        {success && <p className="text-green-500">{success}</p>}
  //        <input
  //          type="text"
  //          placeholder="Your Name"
  //          value={name}
  //          onChange={(e) => setName(e.target.value)}
  //          className="border p-2 m-1 w-full"
  //          required
  //        />
  //        <input
  //          type="text"
  //          placeholder="Your Phone Number"
  //          value={phone}
  //          onChange={(e) => setPhone(e.target.value)}
  //          className="border p-2 m-1 w-full"
  //          required
  //        />
  //        <input
  //          type="text"
  //          placeholder="Your Location (lat,long)"
  //          value={location}
  //          onChange={(e) => setLocation(e.target.value)}
  //          className="border p-2 m-1 w-full"
  //          required
  //        />
  //        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
  //          Alert Me
  //        </button>
  //      </form>
  //    );
  //  };

  //  export default AlertForm;
   

// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const AlertForm = ({ hospitalId }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [location, setLocation] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !phone || !location) {
//       toast.error("All fields are required.");
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/alerts', {
//         name,
//         phone,
//         location,
//         hospital_id: hospitalId,
//       });

//       toast.success("✅ Alert submitted successfully!");
//       setName('');
//       setPhone('');
//       setLocation('');  
//     } catch (error) {
//       toast.error("❌ Failed to submit alert.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-md bg-gray-800 text-white p-6 rounded-lg shadow-lg space-y-4"
//       >
//         <h2 className="text-2xl font-semibold text-center text-blue-400 mb-1">
//           <span role="img" aria-label="bell">🔔</span> Alert Submission Portal
//         </h2>
//         <p className="text-sm text-center text-gray-400">
//           Please provide your details to receive alerts for long ER wait times.
//         </p>

//         <div>
//           <label className="block text-sm text-gray-300 mb-1">Full Name *</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g., Jane Doe"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-300 mb-1">Phone Number *</label>
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g., (555) 123-4567"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm text-gray-300 mb-1">Address / Location *</label>
//           <textarea
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="w-full bg-gray-700 text-white px-4 py-2 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="e.g., 123 Main St, Anytown, USA"
//             required
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
//         >
//           Submit Alert
//         </button>

//         <p className="text-xs text-center text-gray-500 mt-4">
//           © 2025 Hospital Alert System. For emergencies, please call 911.
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AlertForm;

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AlertForm = ({ hospitalId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !location) {
      toast.error("All fields are required.");
      return;
    }

    try {
      await axios.post('https://617116c21f48.ngrok-free.app/api/alerts', {
        name,
        email,
        location,
        hospital_id: hospitalId,
      });

      toast.success("✅ Alert submitted successfully!");
      setName('');
      setEmail('');
      setLocation('');
    } catch (error) {
      toast.error("❌ Failed to submit alert.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 text-white p-6 rounded-lg shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-400 mb-1">
          🔔 Alert Submission Portal
        </h2>
        <p className="text-sm text-center text-gray-400">
          Get notified via email about ER wait time changes near you.
        </p>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Full Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Jane Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Email Address *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., jane@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Address / Location *</label>
          <textarea
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 123 Main St, Anytown, USA"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
        >
          Submit Alert
        </button>

        <p className="text-xs text-center text-gray-500 mt-4">
          © 2025 Hospital Alert System. For emergencies, please call 911.
        </p>
      </form>
    </div>
  );
};

export default AlertForm;

