import { IonPage, IonInput, IonIcon, IonTitle, IonText } from '@ionic/react'
import { personCircle } from "ionicons/icons"

const Register = () => {
  const submitLogin = (formData) => {
    const loginData = {
      name:formData.get("name"),
      email:formData.get("email"),
      password:formData.get("password")
    }
    console.log(loginData)
  }
  return (
    <IonPage>
      <div className="flex justify-center items-center h-full">
        <div className="bg-green-500 w-3/4 rounded p-3 flex flex-col justify-between gap-7">
          <div className="flex flex-col justify-center items-center">
           <IonIcon color="dark" size="large" icon={personCircle}></IonIcon>
           <IonTitle>Register</IonTitle>
          </div>
          <div>
            <form action={submitLogin} className="flex flex-col gap-2">
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
    </IonPage>
  )
}

export default Register