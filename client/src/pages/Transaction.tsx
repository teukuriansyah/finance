import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText, IonIcon, IonTitle } from '@ionic/react';
import { addOutline } from "ionicons/icons"
import { useState, useEffect } from "react"
import service from "../services/services.ts"
import Sidebar from "../components/Sidebar.tsx"

const Transaction = () => {
  const [datas,setDatas] = useState([])
  const pageName = window.location.pathname;
  const changePageName = str => str.slice(1, 2).toUpperCase() + str.slice(2).toLowerCase();
  
  const fetchingData = async() => {
    const { data } = await service.getTransaction(1)
    setDatas(data)
  }
  
  useEffect(() => {
    fetchingData()
  },[])
  
  setTimeout(() => console.log(datas),5000)
  return (
    <>
      <Sidebar active={pageName}/>
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
        <IonContent className="ion-padding">
          <div className="flex justify-end items-center">
            <a href="/addtransaction" className="!bg-green-500 font-bold !text-white !rounded px-2 py-1 flex items-center gap-2"><IonIcon icon={addOutline}></IonIcon>Add Transaction</a>
          </div>
          <div className="mt-8">
            <ul>
              <li>
                <IonText>
                  <span>{datas.notes}</span>
                  <span>{datas.date}</span>
                </IonText>
                <IonTitle>
                  <span>{datas.amount}</span>
                </IonTitle>
              </li>
            </ul>
          </div>
        </IonContent>
      </IonPage>
    </IonText>
  )
}

export default Transaction