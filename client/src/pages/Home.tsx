import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState, useEffect } from "react"
import service from "../services/services.ts"
import Sidebar from "../components/Sidebar.tsx"

function Home() {
  let [amount, setAmount] = useState(0)
  const pageName = (window.location.pathname)
  
  const fetchingData = async() => {
    const { data } = await service.getTransaction(1)
    const calculatedAmount = data.reduce((total, transaction) => {
        return transaction.isIncrease 
          ? total + transaction.amount 
          : total - transaction.amount;
      }, 0)
    setAmount(calculatedAmount)
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
            <IonTitle color="dark">{pageName === "/" ? "Home" : pageName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Content */}
        <IonContent className="ion-padding">
          <div className="bg-green-500">
            <span>{amount}</span>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Home;