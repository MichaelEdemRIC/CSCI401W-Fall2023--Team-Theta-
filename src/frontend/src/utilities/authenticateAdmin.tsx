import axios from "axios";

export async function authenticateAdmin() {
  const testURL = "http://localhost:8000/test_admin_token/";
  const storedToken = sessionStorage.getItem('token');
  console.log(storedToken)
  try {
    await axios.get(testURL, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${storedToken}`
      },
    });
    // If the request is successful (status code 200), the user is authenticated
    return true;
  } catch (error:any) {
    // If the request is forbidden (status code 403), the user is not authenticated
    if (error.response && error.response.status === 403) {
      return false;
    }
    // Handle other errors
    console.error("Error:", error.message);
    return false;
  }
}
  
  