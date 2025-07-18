import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import Sidebar from "../components/Sidebar.tsx"

const Summary = () => {
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
            <IonText className="sm:w-3/6 text-gray-600">Click the button to know about your summary financial</IonText>
            <IonButtons className="bg-green-500 rounded p-3 font-bold">Generate Summary</IonButtons>
          </div>
        </IonContent>
      </IonPage>
    </>
  )
}

export default Summary