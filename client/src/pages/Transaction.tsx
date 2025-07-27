import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText, IonIcon } from '@ionic/react';
import { addOutline } from "ionicons/icons"
import { useState, useEffect } from "react"
import service from "../services/services.ts"
import Sidebar from "../components/Sidebar.tsx"
import List from "../components/List.tsx"

const Transaction = () => {
  let [datas,setDatas] = useState([])
  const pageName = window.location.pathname;
  const token = localStorage.getItem("token")
  const changePageName = str => str.slice(1, 2).toUpperCase() + str.slice(2).toLowerCase();
  
  const fetchingData = async() => {
    try {
      const { data } = await service.getTransaction(token)
      setDatas(data.reverse())
    }
    catch{
      window.location.assign("/login")
    }
  }
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    fetchingData()
  },[])
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
            <ul className="flex flex-col gap-3">
              {datas.map(data => <List  notes={data.notes} date={data.date} amount={data.isIncrease ? `+ Rp.${numberWithCommas(data.amount)}` : `- Rp.${numberWithCommas(data.amount)}`} color={data.isIncrease ? "success" : "danger"}/>)}
            </ul>
          </div>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Transaction