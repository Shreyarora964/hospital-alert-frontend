import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";


export const HospitalContext = createContext();


export const HospitalProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hospitals.length === 0) {
      axios.get("http://localhost:5000/api/hospitals")
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

  return (
    <HospitalContext.Provider value={{ hospitals, loading }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitalContext = () => useContext(HospitalContext);
