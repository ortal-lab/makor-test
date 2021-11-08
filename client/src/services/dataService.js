import axios from "axios"

export async function  getData(){
  const {data}= await axios.get("http://localhost:5000/getData")
  return data;
}
