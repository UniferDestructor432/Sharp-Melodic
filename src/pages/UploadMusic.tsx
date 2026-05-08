import { IonContent, IonIcon, IonPage, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './SharpMelodic.css'
import { chevronBack } from 'ionicons/icons';

const UploadMusic: React.FC = () => {
    return(
      <IonPage className='Upload-Music'>
        <IonContent fullscreen className='flex flex-col'>
            <div className='flex flex-row'>
                <button className='Backwards'><IonIcon icon={chevronBack}/></button>
                <h2>Agregar pieza</h2>
            </div>

            <div>
                <h5>SUBIR ARCHIVO</h5>
            </div>
        </IonContent>
      </IonPage>
    )
}

export default UploadMusic;