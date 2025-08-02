// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "../App.css";

// const Dashboard = () => {
//   const [hospitals, setHospitals] = useState([]);
//   const [filteredHospitals, setFilteredHospitals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/hospitals")
//       .then((res) => {
//         if (res.data.status === "success") {
//           setHospitals(res.data.data);
//           setFilteredHospitals(res.data.data);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("API error:", err);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     const filtered = hospitals.filter((hosp) =>
//       hosp.hospital.toLowerCase().includes(search.toLowerCase()) ||
//       hosp.location.toLowerCase().includes(search.toLowerCase())
//     );
//     setFilteredHospitals(filtered);
//   }, [search, hospitals]);

//   return (
//     <div className="dashboard">
//       <h1>🏥 ER Wait Times Near You</h1>

//       <input
//         type="text"
//         placeholder="Search hospitals or cities..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-bar"
//       />

//       {loading ? (
//         <p className="loading">Loading hospital data...</p>
//       ) : filteredHospitals.length === 0 ? (
//         <p className="error">No matching hospitals found.</p>
//       ) : (
//         <div className="grid">
//           {filteredHospitals.map((hosp, index) => (
//             <Link to={`/hospital/${index}`} key={index} className="card">
//               <h2>{hosp.hospital}</h2>
//               <p>
//                 <strong>Wait Time:</strong>{" "}
//                 <span
//                   className={
//                     hosp.wait_time === "N/A"
//                       ? ""
//                       : parseInt(hosp.wait_time.split(":")[0]) >= 2
//                         ? "wait wait-red"
//                         : parseInt(hosp.wait_time.split(":")[0]) >= 1
//                           ? "wait wait-yellow"
//                           : "wait wait-green"
//                   }
//                 >
//                   {hosp.wait_time}
//                 </span>
//               </p>
//               <p><strong>Location:</strong> {hosp.location}</p>
//               {hosp.phone && hosp.phone !== "N/A" ? (
//                 <a href={`tel:${hosp.phone}`} className="text-blue-700 text-sm flex items-center gap-1">
//                   📞 <span>Call</span>
//                 </a>
//               ) : (
//                 <p className="text-gray-500 text-sm flex items-center gap-1">
//                   📞 <span>Not available</span>
//                 </p>
//               )}
//               {hosp.website && hosp.website !== "N/A" && (
//                 <p className="text-sm text-blue-600">
//                   🌐 Website: <a href={hosp.website} target="_blank" rel="noopener noreferrer">{hosp.website}</a>
//                 </p>
//               )}
//               {hosp.info && hosp.info !== "N/A" && (
//                 <p className="text-sm text-gray-600 mt-1">ℹ️ Info: {hosp.info}</p>
//               )}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


import React, { useContext, useEffect, useState } from "react";
import { HospitalContext } from "../context/HospitalContext";
import HospitalCard from "../components/HospitalCard";
import "../App.css";

const Dashboard = () => {
  const { hospitals, loading } = useContext(HospitalContext);
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially

  useEffect(() => {
    const filtered = hospitals.filter((hosp) =>
      hosp.hospital.toLowerCase().includes(search.toLowerCase()) ||
      hosp.location.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredHospitals(filtered);
    setVisibleCount(6); // Reset visible count on new search
  }, [search, hospitals]);

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="dashboard p-4">

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search hospitals or cities..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar px-4 py-2 border rounded w-full max-w-md"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading hospital data...</p>
      ) : filteredHospitals.length === 0 ? (
        <p className="text-center text-red-600">No matching hospitals found.</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHospitals.slice(0, visibleCount).map((hosp, index) => (
              <HospitalCard key={index} hospital={hosp} index={index} />
            ))}
          </div>

          {visibleCount < filteredHospitals.length && (
            <div className="load-more-container">
              <button
                onClick={loadMore}
                className="load-more-button"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;




