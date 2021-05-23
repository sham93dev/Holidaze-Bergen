import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { RiHotelLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";

function AdminMenu() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();
  function logout() {
    history.push("/");
    setAuth(null);
  }

  return (
    <div className="admin-dashboard-heading">
      <h1>Admin dashboard</h1>
      <button id="btnLogout" onClick={logout}>
        Log out
      </button>
      <p>Welcome to the Holidaze admin dashboard. On this page you have access to edit, delete and add queries. You also have a full overview of messages and orders.</p>
      <div className="admin-dashboard-buttons">
        <Link to="/newaccommodation" className={window.location.pathname === "/newaccommodation" ? "admin-active add-button" : "add-button"}>
          <FiPlusCircle /> New Establisment
        </Link>
        <Link to="/enquiries" className={window.location.pathname === "/enquiries" ? "admin-active enquiry-button" : "enquiry-button"}>
          <RiHotelLine /> Enquiries
        </Link>
        <Link to="/messages" className={window.location.pathname === "/messages" ? "admin-active message-button" : "message-button"}>
          <AiOutlineMessage /> Messages
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
