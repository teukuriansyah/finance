import { IonText, IonTitle } from '@ionic/react';

interface Props {
  notes:string; 
  date:string; 
  amount:string;
  color:string;
}

const List = (props: Props) => {
  return (
    <li className="flex justify-between items-center w-full border border-green-500 rounded p-3">
      <IonText>
        <div className="flex flex-col">
          <span>{props.notes}</span>
          <span className="text-gray-600">{props.date}</span>
        </div>
      </IonText>
      <div>
        <IonTitle color={props.color}>
          <span>{props.amount}</span>
        </IonTitle>
      </div>
    </li>
  );
};

export default List;