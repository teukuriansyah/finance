import axios from "axios"

const api = axios.create({
  baseURL:"http://localhost:3000"
})

const service = {
  loginUser:async(dataBody) => {
    const { data } = await api.post("/loginUser",dataBody)
    return { data }
  },
  registerUser:async(dataBody) => {
    const { data } = await api.post("/registerUser",dataBody)
    return data
  }
}

export default service