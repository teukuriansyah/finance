import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Sidebar from "../components/Sidebar.tsx"

function Home() {
  const pageName = window.location.pathname
  return (
    <>
      <Sidebar/>
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
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.
        </IonContent>
      </IonPage>
    </>
  );
}
export default Home;