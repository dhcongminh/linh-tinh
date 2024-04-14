import axios from "axios";

function API() {}

const BASE_URL = "https://661bd9a165444945d05068b0.mockapi.io/api/v1/foods";

API.addFood = async (food) => {
  try {
    const res = await axios.post(BASE_URL, food);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default API;
