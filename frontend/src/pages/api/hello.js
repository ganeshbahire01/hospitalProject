import { endpoints } from "@/utils/Endpoints";
import axios from "axios";


const baseURL = 'http://localhost:8080/users'

export default async function handler(req, res) {
  try {
    const body = req?.body;
    const register = await axios.post(baseURL + endpoints.POST_REGISTER, body);
    return res.send(register?.data);
  } catch (error) {
    console.log(error);
  }
}
  