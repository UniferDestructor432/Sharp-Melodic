import { IonContent, IonIcon, IonPage, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import './SharpMelodic.css'
import { chevronBack, cloudUploadOutline, musicalNotes} from 'ionicons/icons';

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

                <label className='Upload-Zone'>
                    <input type='file'/>
                    <div className='flex flex-col text-center items-center'>
                        <IonIcon icon={cloudUploadOutline} className='w-[67px] h-[67px] text-black bg-[#222D38] rounded-full p-[10px] mt-[33px]'/>
                        <h4  className='mt-[10px]'>Selecciona un archivo</h4>
                        <h6 className='text-[#6B6B6B] mt-[10px]'>Formatos:  .musicxml .mxl</h6>
                        <h6 className='text-[#898989] mt-[40px]'>Descarga de MuseScore.com o IMPSLorg</h6>
                    </div>
                </label>
            </div>

            <div>
                <h5>BIBLIOTECA DEMO</h5>

                <div className='flex flex-col items-center mt-[13px] gap-[15px]'>
                    <div className='Demo-Music'>
                        <IonIcon icon={musicalNotes} className='text-black bg-[#222D38] w-[40px] h-[40px] p-[4px] rounded-xl ml-[16px]'/>
                        <div className='flex flex-col ml-[17px]'>
                            <h6>Fur Elise</h6>
                            <h6 className='text-[#6C6C6C] mt-2'>Beethoven - Facil</h6>
                        </div>
                        <button className='AddMusic-Button'>Agregar</button>
                    </div>

                    <div className='Demo-Music'>
                        <IonIcon icon={musicalNotes} className='text-black bg-[#222D38] w-[40px] h-[40px] p-[4px] rounded-xl ml-[16px]'/>
                        <div className='flex flex-col ml-[17px]'>
                            <h6>Gymnopédie No.1</h6>
                            <h6 className='text-[#6C6C6C] mt-2'>Satie - Facil</h6>
                        </div>
                        <button className='AddMusic-Button'>Agregar</button>
                    </div>
                    
                    <div className='Demo-Music'>
                        <IonIcon icon={musicalNotes} className='text-black bg-[#222D38] w-[40px] h-[40px] p-[4px] rounded-xl ml-[16px]'/>
                        <div className='flex flex-col ml-[17px]'>
                            <h6>Minuet en Sol</h6>
                            <h6 className='text-[#6C6C6C] mt-2'>Bach - Principiante</h6>
                        </div>
                        <button className='AddMusic-Button'>Agregar</button>
                    </div>

                    <div className='Demo-Music'>
                        <IonIcon icon={musicalNotes} className='text-black bg-[#222D38] w-[40px] h-[40px] p-[4px] rounded-xl ml-[16px]'/>
                        <div className='flex flex-col ml-[17px]'>
                            <h6>Preludio BWV 846</h6>
                            <h6 className='text-[#6C6C6C] mt-2'>Bach - Intermedio</h6>
                        </div>
                        <button className='AddMusic-Button'>Agregar</button>
                    </div>
                </div>
            </div>
        </IonContent>
      </IonPage>
    )
}

export default UploadMusic;