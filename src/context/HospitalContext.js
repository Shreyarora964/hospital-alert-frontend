import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";


export const HospitalContext = createContext();


export const HospitalProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  console.log("Fetching hospital data...");
  if (hospitals.length === 0) {
    axios.get("https://4819525a48dc.ngrok-free.app/api/hospitals")
      .then(res => {
        console.log("API Response:", res.data); // ✅ ADD THIS
        if (res.data.status === "success") {
          setHospitals(res.data.data);
        } else {
          console.warn("Unexpected API status:", res.data.status);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("API Fetch Error:", err);
        setLoading(false);
      });
  } else {
    setLoading(false);
  }
}, [hospitals]);
/*
  useEffect(() => {
    if (hospitals.length === 0) {
      axios.get("https://ace7f9e73c1d.ngrok-free.app/api/hospitals")
        .then(res => {
          if (res.data.status === "success") {
            setHospitals(res.data.data);
          }
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [hospitals]);
*/
  return (
    <HospitalContext.Provider value={{ hospitals, loading }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitalContext = () => useContext(HospitalContext);
