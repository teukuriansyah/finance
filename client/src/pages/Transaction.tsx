import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText, IonIcon } from '@ionic/react';
import { addOutline } from "ionicons/icons"
import Sidebar from "../components/Sidebar.tsx"

const Transaction = () => {
  const pageName = window.location.pathname;
  const changePageName = str => str.slice(1, 2).toUpperCase() + str.slice(2).toLowerCase();
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
            <IonText className="text-gray-600">Click the button to add transaction</IonText>
            <a href="/addtransaction" className="!bg-green-500 font-bold !text-white !rounded px-2 py-1 flex items-center gap-2"><IonIcon icon={addOutline}></IonIcon>Add Transaction</a>
          </div>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Transaction