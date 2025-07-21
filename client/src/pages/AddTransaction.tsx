import { IonPage, IonInput, IonSelect, IonSelectOption, IonIcon } from '@ionic/react'
import { arrowBackOutline } from "ionicons/icons"
import service from "../services/services.ts"

const AddTransaction = () => {
  const submitTransaction = async (formData) => {
    const dataTransaction = {
      idUser:"1",
      isIncrease:formData.get("type") == "true",
      date:formData.get("date"),
      amount:parseInt(formData.get("amount")),
      notes:formData.get("notes"),
    }
    const fetching = await service.postTransaction(dataTransaction)
    console.log(dataTransaction)
  }
  return (
    <>
      <IonPage>
        <div>
          <nav className="bg-green-500 p-3 flex items-center">
            <a href="/transaction" className="flex">
              <IonIcon size="large" color="dark" icon={ arrowBackOutline }></IonIcon>
            </a>
          </nav>
          <div className="p-3 pt-7">
            <form action={submitTransaction}>
              <IonSelect className="outline-0 border-b-2 border-green-500 w-full" name="type" label="Type">
                <IonSelectOption value={true}>Revenue</IonSelectOption>
                <IonSelectOption value={false}>Cost</IonSelectOption>
              </IonSelect>
              <IonInput label="Date" type="date" name="date" className="border-b-2 border-green-500" required></IonInput>
              <IonInput label="Amount" type="number" name="amount" className="border-b-2 border-green-500" required></IonInput>
              <IonInput label="Notes" type="text" name="notes" className="border-b-2 border-green-500" required></IonInput>
              <button type="submit" className="mt-7 bg-green-500 font-bold w-full !p-2 !rounded">Submit</button>
            </form>
          </div>
        </div>
      </IonPage>
    </>
  )
}

export default AddTransaction