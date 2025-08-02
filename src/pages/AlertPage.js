// import React, { useState } from "react";
// import "../App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// import { toast } from "react-toastify";
// import axios from "axios";

// const AlertPage = () => {
//   const [formData, setFormData] = useState({ name: "", phone: "", address: "" });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/api/alerts", formData);
//       toast.success("🚨 Alert submitted successfully!");
//       setFormData({ name: "", phone: "", address: "" }); // Reset form
//     } catch (err) {
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="dashboard">
//       <div className="details-card">
//         <div className="flex justify-center items-center mb-6">
//           <FontAwesomeIcon icon={faBell} size="3x" className="text-red-600 animate-bounce" />
//         </div>
//         <h2 className="text-xl font-semibold text-center mb-4 text-blue-800">Set Up Hospital Alert</h2>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium">Full Name</label>
//             <input
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               type="text"
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Phone Number</label>
//             <input
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               type="tel"
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium">Address</label>
//             <input
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               type="text"
//               className="w-full px-3 py-2 border rounded-md"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Submit Alert
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AlertPage;






// src/pages/AlertPage.js
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
// import "../styles/AlertPage.css"; // Make sure this CSS exists

// const AlertPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/alerts", formData);
//       toast.success("🚨 Alert submitted successfully!");
//       setFormData({ name: "", phone: "", address: "" });
//     } catch (err) {
//       toast.error("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="alert-page-container">
//       <div className="alert-page-header">
//         <FontAwesomeIcon icon={faBell} className="alert-icon" />
//         <h1>Alert Submission Portal</h1>
//         <p>
//           Use this form to request hospital alerts. Please provide accurate
//           contact and location details.
//         </p>
//       </div>

//       <form className="alert-form-card" onSubmit={handleSubmit}>
//         <label>
//           Full Name <span className="required">*</span>
//         </label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           placeholder="e.g., Raj Patel"
//           onChange={handleChange}
//           required
//         />

//         <label>
//           Phone Number <span className="required">*</span>
//         </label>
//         <input
//           type="tel"
//           name="phone"
//           value={formData.phone}
//           placeholder="e.g., 647-123-4567"
//           onChange={handleChange}
//           required
//         />

//         <label>
//           Address <span className="required">*</span>
//         </label>
//         <textarea
//           name="address"
//           value={formData.address}
//           placeholder="123 Main St, Toronto"
//           onChange={handleChange}
//           rows={3}
//           required
//         />

//         <button type="submit">Submit Alert</button>
//       </form>

//       <footer className="alert-footer">
//         <p>© 2025 Hospital Alert System. For emergencies, please call 911.</p>
//         <p>All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default AlertPage;


// AlertPage.js
import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import "../styles/AlertPage.css";

const AlertPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/alerts", formData);
      toast.success("🚨 Alert submitted successfully!");
      setFormData({ name: "", email: "", address: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="alert-page-container">
      <div className="alert-page-header">
        <FontAwesomeIcon icon={faBell} className="alert-icon" />
        <h1>Alert Submission Portal</h1>
        <p>
          Receive hospital alerts via email. Provide your details to subscribe.
        </p>
      </div>

      <form className="alert-form-card" onSubmit={handleSubmit}>
        <label>
          Full Name <span className="required">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="e.g., Raj Patel"
          onChange={handleChange}
          required
        />

        <label>
          Email Address <span className="required">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="e.g., raj@example.com"
          onChange={handleChange}
          required
        />

        <label>
          Address <span className="required">*</span>
        </label>
        <textarea
          name="address"
          value={formData.address}
          placeholder="123 Main St, Toronto"
          onChange={handleChange}
          rows={3}
          required
        />

        <button type="submit">Submit Alert</button>
      </form>

      <footer className="alert-footer">
        <p>© 2025 Hospital Alert System. For emergencies, please call 911.</p>
      </footer>
    </div>
  );
};

export default AlertPage;

