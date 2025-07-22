import axios from "axios"

const api = axios.create({
  baseURL:import.meta.env.VITE_ENDPOINT
})

const service = {
  loginUser:async(dataBody) => {
    const { data } = await api.post("/loginUser",dataBody)
    return { data }
  },
  registerUser:async(dataBody) => {
    const { data } = await api.post("/registerUser",dataBody)
    return data
  },
  getTransaction:async(id) => {
    const { data } = await api.get("/transactionById/" + id)
    return data
  },
  postTransaction:async(dataBody) => {
    const { data } = await api.post("/transaction",dataBody)
    return data
  }
}

export default service