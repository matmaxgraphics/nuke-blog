import axios from "axios";

const apiBaseUrl = "https://nukeapi.pythonanywhere.com/api";

const usePostRequest = async (url, data, authToken) => {
  try {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await axios.post(`${apiBaseUrl}/${url}/`, formData, {
      headers: {
        Authorization: `Token ${authToken}`,
        // 'Content-Type': 'multipart/form-data' // Not needed, Axios sets it automatically
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error in making POST request:", error.message);
    throw error;
  }
};

export default usePostRequest;
