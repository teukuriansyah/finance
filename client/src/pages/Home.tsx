import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import { useState, useEffect } from "react"
import { jwtDecode } from "jwt-decode"
import service from "../services/services.ts"
import Sidebar from "../components/Sidebar.tsx"

function Home() {
  let [amount, setAmount] = useState(0)
  let [expense, setExpense] = useState([])
  let [revenue, setRevenue] = useState([])
  let [nameUser, setNameUser] = useState("")
  const pageName = (window.location.pathname)
  const token = localStorage.getItem("token")
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  const fetchingData = async() => {
    try {
      const { data } = await service.getTransaction(token)
      const calculatedAmount = data.reduce((total, transaction) => {
          return transaction.isIncrease 
            ? total + transaction.amount 
            : total - transaction.amount;
        }, 0)
      setAmount(calculatedAmount);
      setExpense(data.filter(d => !d.isIncrease).map(d => d.amount));
      setRevenue(data.filter(d => d.isIncrease).map(d => d.amount));
    }
    catch (err){
      window.location.assign("/login")
    }
  }
  
  const getNameUser = () => {
    if(token == null) {
      window.location.assign("/login")
    }
    else {
      const { name } = jwtDecode(token)
      setNameUser(name)
    }
  }
  
  useEffect(() => {
    fetchingData()
    getNameUser()
  },[])
  return (
    <>
      <Sidebar active={pageName} name={nameUser}/>
      <IonPage id="main-content">
        {/* Navbar */}
        <IonHeader>
          <IonToolbar color="success">
            <IonButtons slot="start">
              <IonMenuButton color="light"></IonMenuButton>
            </IonButtons>
            <IonTitle color="light">{pageName === "/" ? "Home" : pageName}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        {/* Content */}
        <IonContent className="ion-padding">
          <div className="h-[25%] p-3 bg-green-500 rounded flex justify-end flex-col">
            <div>
              <IonTitle color="light">Rp. {numberWithCommas(amount)}</IonTitle>
            </div>
            <div>
              <IonText color="light">{nameUser}</IonText>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
}
export default Home;