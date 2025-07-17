import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </>
  )
}

export default Transaction