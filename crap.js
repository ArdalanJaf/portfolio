export const callAxios = async (method, url, payload) => {
  try {
    const result = await axios[method](url, payload);
    if (result.data.status === 0) {
      alert(result.data.error);
    }
    return result;
  } catch (error) {
    alert("API down");
  }
};

callAxios("post", API_URL + "/matching/seen", {
  user_id: payload.userId,
  foreign_id: payload.foreignUserId,
});

// Sends form-data to back-end to be stored.
const sendForm = async (payload) => {
  try {
    const result = await axios.post(API_URL + "/email", payload);
    if (result.data.status === 0) {
      alert(result.data.error);
    }
    alert("success...?"); // some sort of notification to show user it was sent.
    return result;
  } catch (error) {
    alert("API down");
  }
};

// for testing
// let arr = [];
// for (const [key, value] of Object.entries(result.data.joiErrors)) {
//   arr.push(`${key}: ${value} `);
// }
// alert(arr.join(" - "));
