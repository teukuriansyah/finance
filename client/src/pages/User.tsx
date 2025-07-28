import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, IonText } from '@ionic/react';
import { personCircle } from "ionicons/icons"
import { useEffect, useState } from "react"
import { jwtDecode } from "jwt-decode"
import service from "../services/services.ts"
import Sidebar from '../components/Sidebar.tsx'

const User = () => {
  const [dataUser, setDataUser] = useState("")
  const pageName = window.location.pathname;
  const changePageName = str => str.slice(1, 2).toUpperCase() + str.slice(2).toLowerCase();
  const token = localStorage.getItem("token")
  
  const getDataUser = () => {
    if(token == null) {
      window.location.assign("/login")
    }
    else {
      const data = jwtDecode(token)
      setDataUser(data)
    }
  }
  
  const handleLogout = () => {
    localStorage.removeItem("token")
    window.location.assign("/login")
  }
  
  useEffect(() => {
    getDataUser()
  },[])
  
  return (
    <>
      <Sidebar active={pageName} name={dataUser.name}/>
      <IonPage id="main-content">
        {/* Navbar */}
        <IonHeader>
          <IonToolbar color="success">
            <IonButtons slot="start">
              <IonMenuButton color="dark"></IonMenuButton>
            </IonButtons>
            <IonTitle color="dark">{pageName === "/" ? "Home" : changePageName(pageName)}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Content */}
        <IonContent>
          <div className="h-full flex flex-col justify-center items-center">
            <div className="flex flex-col w-3/4 h-1/3 items-center justify-evenly">
              <div>
                <IonIcon color="dark" size="large" icon={personCircle}></IonIcon>
              </div>
              <div>
                <IonText>
                  <div className="flex flex-col gap-3">
                   <div>
                     <span>Nama : { dataUser == "" ? "" : dataUser.name }</span>
                   </div>
                   <div>
                     <span>Email : { dataUser == "" ? "" : window.atob(dataUser.email)}</span>
                   </div>
                  </div>
                </IonText>
              </div>
            </div>
            <div>
              <IonButtons className="bg-green-500 px-3 py-1 rounded font-bold text-lg" onClick={() => handleLogout()}>Logout</IonButtons>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  )
}

export default User