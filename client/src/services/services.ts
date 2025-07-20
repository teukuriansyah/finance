import axios from "axios"

const api = axios.create({
  baseURL:"http://localhost:3000"
})

const service = {
  loginUser:async(data) => {
    const res = await api.post("/loginUser")
    return res
  },
  registerUser:async(data) => {
    const res = await api.post("/registerUser")
    return res
  }
}

export default service