import { IonPage, IonInput, IonIcon, IonTitle, IonText } from '@ionic/react'
import { personCircle } from "ionicons/icons"
import service from "../services/services.ts"

const Login = () => {
  const submitLogin = (formData) => {
    const loginData = {
      email:formData.get("email"),
      password:formData.get("password")
    }
    service.loginUser(loginData)
    console.log(loginData)
  }
  return (
    <IonPage>
      <div className="flex justify-center items-center h-full">
        <div className="bg-green-500 w-3/4 rounded p-3 gap-7 flex flex-col justify-between">
          <div className="flex flex-col justify-center items-center h-1/3">
           <IonIcon color="dark" size="large" icon={personCircle}></IonIcon>
           <IonTitle>Login</IonTitle>
          </div>
          <div>
            <form action={submitLogin} className="flex flex-col gap-2">
              <IonInput label="Email" type="email" placeholder="Input email" name="email" required></IonInput>
              <IonInput label="Password" type="password" placeholder="Input password" name="password" required></IonInput>
              <button type="submit" className="bg-white text-green-500 font-black !rounded w-full !p-2">Login</button>
            </form>
            <div className="mt-3 flex justify-center">
              <IonText>Don't have an account ? Click <a href="/register">here</a></IonText>
            </div>
          </div>
        </div>
      </div>
    </IonPage>
  )
}

export default Login