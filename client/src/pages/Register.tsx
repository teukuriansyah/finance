import { IonPage, IonInput, IonIcon, IonTitle, IonText, IonToast } from '@ionic/react'
import { personCircle } from "ionicons/icons"
import { useState, useEffect } from "react"
import service from "../services/services.ts"

const Register = () => {
  const [isShowToast, setIsShowToast] = useState(false)
  const [messageToast, setMessageToast] = useState("")
  const [color, setColor] = useState("")
  
  const submitRegister = async (formData) => {
    try {
      const registerData = {
        name:formData.get("name"),
        email:window.btoa(formData.get("email")),
        password:window.btoa(formData.get("password"))
      }
      const fetching = await service.registerUser(registerData)
      setIsShowToast(true)
      setMessageToast("Register success")
      setColor("success")
    }
    catch {
      setIsShowToast(true)
      setMessageToast("Register failed")
      setColor("danger")
    }
  }
  
  useEffect(() => {
    if(isShowToast) {
      setTimeout(() => setIsShowToast(false),3000)
    }
  },[submitRegister])
  return (
    <IonPage>
      <div className="flex justify-center items-center h-full">
        <div className="bg-green-500 w-3/4 rounded p-3 flex flex-col justify-between gap-7">
          <div className="flex flex-col justify-center items-center">
           <IonIcon color="dark" size="large" icon={personCircle}></IonIcon>
           <IonTitle>Register</IonTitle>
          </div>
          <div>
            <form action={submitRegister} className="flex flex-col gap-2">
              <IonInput label="Name" type="text" placeholder="Input name" name="name" required></IonInput>
              <IonInput label="Email" type="email" placeholder="Input email" name="email" required></IonInput>
              <IonInput label="Password" type="password" placeholder="Input password" name="password" required></IonInput>
              <button type="submit" className="bg-white text-green-500 font-black !rounded w-full !p-2">Register</button>
            </form>
            <div className="mt-3 flex justify-center">
              <IonText>Have an account ? Click <a href="/login">here</a></IonText>
            </div>
          </div>
        </div>
      </div>
      <IonToast isOpen={isShowToast} message={messageToast} color={color} duration={3000}></IonToast>
    </IonPage>
  )
}

export default Register