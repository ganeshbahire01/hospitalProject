import { endpoints } from "@/utils/Endpoints";
import axios from "axios";

const baseURL = "http://localhost:8080/users";

export default async function handler(req, res) {
  try {
    const body = req?.body;
    const login = await axios.post(baseURL + endpoints.POST_LOGIN, body);
    return res.send(login?.data);
  } catch (error) {
    console.log(error);
  }
}
