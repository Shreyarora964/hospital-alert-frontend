// // src/components/Header.js
// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell, faHouse } from "@fortawesome/free-solid-svg-icons";
// import "../styles/Header.css"; // 👈 linked to external CSS

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-content">
//         <h1 className="site-title">
//           🏥 MedAlert Dashboard
//         </h1>
//         <nav className="nav-links">
//           <Link to="/" className="nav-btn">
//             <FontAwesomeIcon icon={faHouse} /> Dashboard
//           </Link>
//           <Link to="/alert" className="nav-btn">
//             <FontAwesomeIcon icon={faBell} /> Set Alert
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faHome, faHospital } from "@fortawesome/free-solid-svg-icons";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <FontAwesomeIcon icon={faHospital} />
        <span>MedAlert Dashboard</span>
      </div>

      <div className="nav-buttons">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} />
          Dashboard
        </Link>
        <Link to="/alert">
          <FontAwesomeIcon icon={faBell} />
          Set Alert
        </Link>
      </div>
    </header>

  );
};

export default Header;
