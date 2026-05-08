import { IonContent, IonIcon, IonPage, useIonToast } from '@ionic/react';
import { mailOutline, personOutline, lockClosed, eyeOff, eye } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { db } from '../firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword as registroUsuario} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import './Sign.css';

const CreateAccount: React.FC = () => {
    const [passwordVisible, SetpasswordVisible] = useState(false);
    const [readyToSubmmit, SetreadyToSubmmit] = useState(false);
    const [userPassword, setUserPassword] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userName, setUserName] = useState('');
    const [userSheetMusic] = useState<any>([])
    const history = useHistory();
    const [present] = useIonToast();

    const createUser = async(e: React.FormEvent) => {
        e.preventDefault();

        if(!userPassword || !userMail || !userName){
            present({
                message: 'Please, complete all the blank spaces to create your account',
                color: 'warning',
                duration: 2000,
            })
        }else{
            try{
                const userCredential = await registroUsuario(auth, userMail, userPassword);
                const user = userCredential.user;

                await setDoc(doc(db, 'Users', user.uid), {
                    userName,
                    userSheetMusic,
                });

                present({
                    message: `Congrats, your user has been created. Welcome ${userName}`,
                    color: 'success',
                    duration: 2000,
                });

                setUserName('');
                setUserMail('');
                setUserPassword('');
                SetpasswordVisible(false);

                await(2000);
                history.push('/');
            }catch(error){
                console.error('There was an error while creating your account');
                present({
                    message: 'There was an unexpected error while creating your account',
                    color: 'danger',
                    duration: 2000,
                });
            }
        }
    }

    return(
        <IonPage className='Sign-Page'>
            <IonContent fullscreen className='flex flex-col'>
                <h2>Crea tu <span className='text-[#F04444]'>cuenta</span></h2>
                <h4>Sincroniza tu biblioteca y reportes en todos tus dispositivos.</h4>

                <div>
                    <div className='mt-[32px]'>
                        <h5 className='text-start ml-[45px] mb-[3px]'>NOMBRE</h5>
                        <IonIcon icon={personOutline} className='absolute w-[45px] h-[45px] left-[53px] top-[229px] text-gray-700'/>
                        <input type='text' placeholder='¿Cómo te llamas?' value={userName} onChange={(e) => {setUserName(e.target.value)}} className='mt-[3px]'/>
                    </div>

                    <div className='mt-[20px]'>
                        <h5 className='text-start ml-[45px] mb-[3px]'>EMAIL</h5>
                        <IonIcon icon={mailOutline} className='absolute w-[35px] h-[35px] left-[57px] top-[338px] text-black'/>
                        <input type='email' placeholder='tu@email.com' value={userMail} onChange={(e) => {setUserMail(e.target.value)}} className='mt-[3px]'/>
                    </div>

                    <div className='mt-[27px]'>
                        <h5 className='text-start ml-[45px] mb-[3px]'>CONTRASEÑA</h5>
                        <IonIcon icon={lockClosed} className='absolute w-[35px] h-[35px] left-[55px] top-[441px] text-black'/>
                        <input type={passwordVisible ? 'text' : 'password'} placeholder='Mínimo 8 caracteres' value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}}/>
                        <IonIcon icon={passwordVisible ? eyeOff : eye} onClick={() => SetpasswordVisible(!passwordVisible)} className='absolute left-[340px] w-[42px] h-[42px] top-[439px] text-black'/>
                    </div>

                    <div className='flex gap-[11px] mt-[21px] justify-center'>
                        <div className={userPassword.length >= 2 ? 'PasswordBarsDeactivated' : 'PasswordBarsActivated'}></div>
                        <div className={userPassword.length >= 4 ? 'PasswordBarsDeactivated' : 'PasswordBarsActivated'}></div>
                        <div className={userPassword.length >= 6 ? 'PasswordBarsDeactivated' : 'PasswordBarsActivated'}></div>
                        <div className={userPassword.length >= 8 ? 'PasswordBarsDeactivated' : 'PasswordBarsActivated'}></div>
                    </div>
                </div>

                <div style={{display: 'flex', marginTop: '40px', alignItems: 'center'}}>
                    <input type='checkbox' className='checkbox' onChange={() => {SetreadyToSubmmit(!readyToSubmmit)}}/>
                    <h5 className='w-[248px] text-start ml-[11px]'>Acepto los <span className='text-white'>Términos</span> y la <span className='text-white'>Política de Privacidad</span></h5>
                </div>

                <button type='submit' className='mt-[25px]' disabled={!readyToSubmmit} onClick={createUser}>Crear cuenta</button>

                <h5>¿Ya tienes cuenta? <span className='text-white' onClick={() => {history.push('/login')}}>Iniciar sesión</span></h5>
            </IonContent>
        </IonPage>
    )
}

export default CreateAccount;