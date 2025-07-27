import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import { summary } from "../utils/groq.ts"
import { recommended } from "../utils/groq.ts"
import { useState, useEffect } from "react"
import Sidebar from "../components/Sidebar.tsx"
import service from "../services/services.ts"

const Summary = () => {
  const [datas, setDatas] = useState("")
  const [textSummary,setTextSummary] = useState("")
  const [textRecommended,setTextRecommended] = useState("")
  const pageName = window.location.pathname;
  const token = localStorage.getItem("token")
  const changePageName = str => str.slice(1, 2).toUpperCase() + str.slice(2).toLowerCase();
  
  const fetchingData = async() => {
    try {
      const { data } = await service.getTransaction(token)
      setDatas(JSON.stringify(data))
    }
    catch {
      window.location.assign("/login")
    }
  }
  
  const summaryTransaction = async () => {
    setTextSummary("Loading...")
    setTextRecommended("Loading...")
    const dataSummary = await summary(datas)
    const dataRecommended = await summary(datas)
    setTimeout(() => {
      setTextSummary(dataSummary)
      setTextRecommended(dataRecommended)
    },100)
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
          <div className="flex justify-between items-center">
            <IonText className="sm:w-3/6 text-gray-600">Click the button to know about your summary financial</IonText>
            <IonButtons className="bg-green-500 rounded p-3 font-bold" onClick={() => summaryTransaction()}>Generate Summary</IonButtons>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <div>
              <IonTitle>Summary</IonTitle>
              <IonText>
                { textSummary }
              </IonText>
            </div>
            <div>
              <IonTitle>Recommended</IonTitle>
              <IonText>
                { textRecommended }
              </IonText>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Summary