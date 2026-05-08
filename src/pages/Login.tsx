import { IonContent, IonIcon, IonPage, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { eye, eyeOff, lockClosed, mailOutline } from 'ionicons/icons'
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword as loginUsuario } from 'firebase/auth';
import { useHistory } from 'react-router';
import './SharpMelodic.css'

const Login: React.FC = () => {
  const [passwordVisible, SetpasswordVisible] = useState(false);
  const [userPassword, setUserPassword] = useState('');
  const [userMail, setUserMail] = useState('');
  const history = useHistory();
  const [present] = useIonToast();
  
  const userLogin = async(e: React.FormEvent) => {
    e.preventDefault();

    if(!userPassword || !userMail){
      present({
          message: 'Por favor, rellena todos los espacios en blanco para iniciar sesión',
          color: 'warning',
          duration: 2000,
      })
    }else{
      try{
        await loginUsuario(auth, userMail, userPassword);

        present({
          message: `¡Acceso concedido! Bienvenido de vuelta`,
          color: 'success',
          duration: 2000,
        })

        setUserMail('');
        setUserPassword('');
        SetpasswordVisible(false);

        await(2000);
        history.push('/create-account')
      }catch(error:any){
        if(error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
          console.error("El usuario o contraseña son incorrectos");
          present({
              message: 'El usuario o contraseña son incorrectos',
              color: 'danger',
              duration: 2000,
          })
        }else{
          console.error("Se encontró un error inesperado al acceder a tu cuenta: ",error);
          present({
            message: `Se encontró un error inesperado al acceder a tu cuenta: ${error}`,
            color: 'danger',
            duration: 2000,
          })
        }
      }
    }
  }

  return (
    <IonPage className='Sign-Page'>
      <IonContent fullscreen className='flex flex-col'>
        <h1>Sharp</h1>
        <h3>Convierte tu práctica en datos</h3>
        
        <div>
          <IonIcon icon={mailOutline} className='absolute w-[35px] h-[35px] left-[59px] top-[482px] text-black'/>
          <input type='email' placeholder='tu@email.com' value={userMail} onChange={(e) => {setUserMail(e.target.value)}} className='mt-[34px]'/>
        </div>
        <div className='mt-[13px]'>
          <IonIcon icon={lockClosed} className='absolute w-[35px] h-[35px] left-[59px] top-[549px] text-black'/>
          <input type={passwordVisible ? 'text' : 'password'} value={userPassword} onChange={(e) => {setUserPassword(e.target.value)}} placeholder='* * * * * * *'/>
          <IonIcon icon={passwordVisible ? eyeOff : eye} onClick={() => SetpasswordVisible(!passwordVisible)} className='absolute left-[340px] w-[42px] h-[42px] top-[546px] text-black'/>
        </div>

        <button type='submit' className='mt-[50px]' onClick={userLogin}>Iniciar sesión</button>

        <h5>¿No tienes cuenta? <span className='text-white' onClick={() => {history.push('/create-account')}}>Crear cuenta</span></h5>
      </IonContent>
    </IonPage>
  );
};

export default Login;
