import axios from "axios";
import swal from "sweetalert";

export const HandleLogout = async (navigate) => {
  try {
    const response = await axios.post('http://localhost:8000/api/logout', {}, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    });

    if (response.data.status) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_name");
      swal("Success", response.data.message, "success");
      navigate("/login");
    }
  } catch (error) {
    console.error("Logout error", error);
  }
};
