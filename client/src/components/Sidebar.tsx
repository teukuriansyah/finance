import React from 'react';
import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon, } from '@ionic/react';
import { personCircle, homeSharp, homeOutline, documentTextOutline, documentTextSharp, cashOutline, cashSharp } from "ionicons/icons"

function Sidebar(props) {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="success">
            <div className="px-3 gap-3">
              <a href="/user" className="flex gap-3">
                <IonIcon color="light" size="large" icon={personCircle}></IonIcon>
                <IonTitle color="light">{props.name}</IonTitle>
              </a>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <ul className="pt-3 flex flex-col gap-1">
            <li className={`${props.active === "/" ? "bg-green-500" : ""} flex`}>
              <a href="/" className="!text-black text-2xl font-bold p-3 w-full flex gap-3">
                <IonIcon color={`${props.active === "/" ? "light" : "dark"}`} size="large" icon={props.active === "/" ? homeSharp : homeOutline}></IonIcon>
                <span className={`${props.active === "/" ? "text-white" : "text-black"}`}>Home</span>
              </a>
            </li>
            <li className={`${props.active === "/transaction" ? "bg-green-500" : ""} flex`}>
              <a href="/transaction" className="!text-black text-2xl font-bold p-3 w-full flex gap-3">
                <IonIcon color={`${props.active === "/transaction" ? "light" : "dark"}`} size="large" icon={props.active === "/transaction" ? cashSharp : cashOutline}></IonIcon>
                <span className={`${props.active === "/transaction" ? "text-white" : "text-black"}`}>Transaction</span>
              </a>
            </li>
            <li className={`${props.active === "/summary" ? "bg-green-500" : ""} flex`}>
              <a href="/summary" className="!text-black text-2xl font-bold p-3 w-full flex gap-3">
                <IonIcon color={`${props.active === "/summary" ? "light" : "dark"}`} size="large" icon={props.active === "/summary" ? documentTextSharp : documentTextOutline}></IonIcon>
                <span className={`${props.active === "/summary" ? "text-white" : "text-black"}`}>Summary</span>
              </a>
            </li>
          </ul>
        </IonContent>
      </IonMenu>
    </>
  );
}
export default Sidebar;