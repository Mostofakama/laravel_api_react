import React from "react";
import { useNavigate } from "react-router-dom";
import { HandleLogout } from "./personal/Logout"; // Import the logout function
import LogoutIcon from '@mui/icons-material/Logout' 
const LogoutC = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    HandleLogout(navigate);
  };

  return (
   
      <button className="btn btn-danger" onClick={handleLogoutClick}>
      <LogoutIcon />
      Logout
    </button>
    
  );
};

export default LogoutC;
