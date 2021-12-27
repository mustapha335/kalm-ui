import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWM1NTUwNWVhZDc4ZmE1ZTkzNGNhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDUzOTMwOCwiZXhwIjoxNjQwNzk4NTA4fQ.AR5txTLo7lOGQxdQ30AlCWXITiZcSgFDdJlhzrbnbTo";

// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken
// );

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
