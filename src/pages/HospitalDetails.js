
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useHospitalContext } from "../context/HospitalContext";
import "../styles/HospitalDetails.css";

const HospitalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { hospitals } = useHospitalContext();
  const hospital = hospitals[parseInt(id)];

  if (!hospital) return <p className="loading">Hospital not found.</p>;

  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(hospital.location)}&output=embed`;

  return (
    <div className="hospital-details-container">
      <button onClick={() => navigate("/")} className="back-btn">← Back to Dashboard</button>

      <div className="hospital-card">
        <h2 className="hospital-name">{hospital.hospital}</h2>
        <p className="wait-time animate-pulse">⏱ Wait Time: {hospital.wait_time}</p>

        <p>📍 <strong>Address:</strong> {hospital.location}</p>

        {hospital.phone && hospital.phone !== "N/A" && (
          <p>📞 <strong>Phone:</strong> <a href={`tel:${hospital.phone}`}>{hospital.phone}</a></p>
        )}

        {hospital.website && hospital.website !== "N/A" && (
          <p>🌐 <strong>Website:</strong> <a href={hospital.website} target="_blank" rel="noreferrer">{hospital.website}</a></p>
        )}

        {hospital.info && (
          <p>ℹ️ <strong>Info:</strong> {hospital.info}</p>
        )}

        <div className="map-container">
          <iframe
            title="Google Map"
            src={mapEmbed}
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <p className="note">
          Note: Hospital information is updated based on the latest available data from ER Watch.
        </p>
      </div>
    </div>
  );
};

export default HospitalDetails;
