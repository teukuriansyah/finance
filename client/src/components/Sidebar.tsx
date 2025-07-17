import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, } from '@ionic/react';
import { personOutline } from "ionicons/icons"

function Sidebar() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="success">
            <div className="pl-3 flex items-center gap-3">
              <IonIcon color="dark" icon={personOutline}></IonIcon>
              <IonTitle color="dark">nama user</IonTitle>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <ul className="pt-3">
            <li className="bg-green-500 p-3">
              <a href="/" className="!text-white text-2xl font-bold w-full">test</a>
            </li>
            <li className="p-3">
              <a href="/" className="!text-white text-2xl font-bold">test</a>
            </li>
            <li className="p-3">
              <a href="/" className="!text-white text-2xl font-bold">test</a>
            </li>
          </ul>
        </IonContent>
      </IonMenu>
    </>
  );
}
export default Sidebar;