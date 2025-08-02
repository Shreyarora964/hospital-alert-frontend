// import React from "react";
// import { Link } from "react-router-dom";

// const HospitalCard = ({ hospital, index }) => {
//   const getWaitColor = (wait) => {
//     if (!wait || wait === "N/A") return "";
//     const mins = parseInt(wait.split(":")[0]);
//     if (mins >= 2) return "wait wait-red";
//     if (mins >= 1) return "wait wait-yellow";
//     return "wait wait-green";
//   };

//   return (
//     <div className="card">
//       <Link to={`/hospital/${index}`}>
//         <h2 className="font-semibold underline text-lg text-blue-800 hover:text-blue-600">{hospital.hospital}</h2>
//       </Link>
//       <p>
//         <strong>Wait Time:</strong>{" "}
//         <span className={getWaitColor(hospital.wait_time)}>{hospital.wait_time}</span>
//       </p>
//       <p><strong>Location:</strong> {hospital.location}</p>
//       {hospital.phone && hospital.phone !== "N/A" ? (
//         <a href={`tel:${hospital.phone}`} className="text-blue-700 text-sm flex items-center gap-1">
//           📞 <span>{hospital.phone}</span>
//         </a>
//       ) : (
//         <p className="text-gray-500 text-sm flex items-center gap-1">📞 <span>Not available</span></p>
//       )}
//       {hospital.website && hospital.website !== "N/A" && (
//         <p className="text-sm text-blue-600">
//           🌐 Website: <a href={hospital.website} target="_blank" rel="noopener noreferrer">{hospital.website}</a>
//         </p>
//       )}
//       {hospital.info && hospital.info !== "N/A" && (
//         <p className="text-sm text-gray-600 mt-1">ℹ️ Info: {hospital.info}</p>
//       )}
//     </div>
//   );
// };

// export default HospitalCard;


// import React from "react";
// import { Link } from "react-router-dom";

// const HospitalCard = ({ hospital, index }) => {
//   const getWaitColor = (wait) => {
//     if (!wait || wait === "N/A") return "";
//     const mins = parseInt(wait.split(":")[0]);
//     if (mins >= 2) return "wait wait-red";
//     if (mins >= 1) return "wait wait-yellow";
//     return "wait wait-green";
//   };

// return (
//   <div className="card">
//     {/* Only the hospital name is a clickable link */}
//     <h2 className="font-semibold underline text-lg text-blue-800 hover:text-blue-600">
//       <Link to={`/hospital/${index}`}>{hospital.hospital}</Link>
//     </h2>

//     <p>
//       <strong>Wait Time:</strong>{" "}
//       <span className={getWaitColor(hospital.wait_time)}>{hospital.wait_time}</span>
//     </p>

//     <p><strong>Location:</strong> {hospital.location}</p>

//     {hospital.phone && hospital.phone !== "N/A" ? (
//       <p className="text-blue-700 text-sm flex items-center gap-1">
//         📞 <a href={`tel:${hospital.phone}`}>{hospital.phone}</a>
//       </p>
//     ) : (
//       <p className="text-gray-500 text-sm flex items-center gap-1">
//         📞 <span>Not available</span>
//       </p>
//     )}

//     {hospital.website && hospital.website !== "N/A" && (
//       <p className="text-sm text-blue-600">
//         🌐 Website: <a href={hospital.website} target="_blank" rel="noopener noreferrer">{hospital.website}</a>
//       </p>
//     )}

//     {hospital.info && hospital.info !== "N/A" && (
//       <p className="text-sm text-gray-600 mt-1">ℹ️ Info: {hospital.info}</p>
//     )}
//   </div>
// );
// };

// export default HospitalCard;

import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";
import { faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClock, faUserClock, faProcedures } from "@fortawesome/free-solid-svg-icons";

const HospitalCard = ({ hospital, index }) => {
  const waitTimeMins = parseInt(hospital.wait_time?.split(":")[0]) || 0;
  const waiting = parseInt(hospital.waiting) || 0;
  const inTreatment = parseInt(hospital.in_treatment) || 0;

  const getWaitColor = (minutes) => {
    if (minutes >= 2) return "#dc2626"; // red
    return "#16a34a"; // green
  };

  return (
    <div className="card">
      <Link to={`/hospital/${index}`}>
        <h2 className="hospital-title">{hospital.hospital}</h2>
      </Link>

      <div className="circle-container">
        {/* Wait Time Circle */}
        <div className="circle-box">
          <CircularProgressbar
            value={waitTimeMins && !isNaN(waitTimeMins) ? waitTimeMins : 0}
            maxValue={10}
            text={hospital.wait_time && hospital.wait_time !== "N/A" ? hospital.wait_time : "N/A"}
            styles={buildStyles({
              pathColor: getWaitColor(waitTimeMins),
              textColor: getWaitColor(waitTimeMins),
              trailColor: "#f3f4f6",
              textSize: "18px",
            })}
          />
          <span className="circle-subtext">Wait</span>
        </div>

        {/* Waiting Circle */}
        <div className="circle-box">
          <CircularProgressbar
            value={!isNaN(waiting) ? waiting : 0}
            maxValue={20}
            text={hospital.waiting && hospital.waiting !== "N/A" ? `${hospital.waiting}` : "N/A"}
            styles={buildStyles({
              pathColor: "#3b82f6",
              textColor: "#3b82f6",
              trailColor: "#f3f4f6",
              textSize: "18px",
            })}
          />
          <span className="circle-subtext">Waiting</span>
        </div>

        {/* In Treatment Circle */}
        <div className="circle-box">
          <CircularProgressbar
            value={!isNaN(inTreatment) ? inTreatment : 0}
            maxValue={100}
            text={hospital.in_treatment && hospital.in_treatment !== "N/A" ? `${hospital.in_treatment}` : "N/A"}
            styles={buildStyles({
              pathColor: "#ef4444",
              textColor: "#ef4444",
              trailColor: "#f3f4f6",
              textSize: "18px",
            })}
          />
          <span className="circle-subtext">In Care</span>
        </div>
      </div>

      <div className="actions-row">
        {/* Call Button */}
        <a
          href={`tel:${hospital.phone}`}
          className={`action-button ${hospital.phone === "N/A" ? "disabled" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPhone} className="action-icon" />
          <span>Call</span>
        </a>

        {/* Website Button */}
        <a
          href={hospital.website !== "N/A" ? hospital.website : "#"}
          className={`action-button ${hospital.website === "N/A" ? "disabled" : ""}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGlobe} className="action-icon" />
          <span>Website</span>
        </a>
      </div>

      {/* {hospital.info && hospital.info !== "N/A" && (
        <p className="text-sm text-gray-600 mt-1">ℹ️ Info: {hospital.info}</p>
      )} */}


    </div>
  );
};

export default HospitalCard;



// {/* Only the hospital name is a clickable link */}
//       {/* <h2 className="font-semibold underline text-lg text-blue-800 hover:text-blue-600">
//           <Link to={`/hospital/${index}`}>{hospital.hospital}</Link>
//         </h2>

//         <p>
//           <strong>Wait Time:</strong>{" "}
//           <span className={getWaitColor(hospital.wait_time)}>{hospital.wait_time}</span>
//         </p> */}

//       {/* <p><strong>Location:</strong> {hospital.location}</p> */}




