import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FirestoreDB from './component/FirestoreDB'
import FormFireStore from './component/FormFireStore'
import Realtimedb from './component/Realtimedb'
import SinUpauth from './component/SinUpauth'
import Sinin_Auth from './component/Sinin_Auth'
import { onAuthStateChanged } from 'firebase/auth'
import { app } from "../src/firebase";
import { signOut,getAuth } from 'firebase/auth/cordova'
import { useState,useEffect } from 'react'
import GoogleAuth from './component/GoogleAuth'


function App() {
  const auth = getAuth(app);

  const [user, setUser] = useState(null);

  useEffect(
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.email);
            setUser(user);
        } else {
            setUser(null)
        }
    }), []
);

if (user === null) {
  return(
  <>
   <SinUpauth/> <br />
   <Sinin_Auth/>
   </>
   )
 
}
 
  return (
    <>
    {/* <Realtimedb/> */}
    {/* <FirestoreDB/> */}
    {/* <FormFireStore/> */}
    <button onClick={()=>{signOut(auth)}}>sinOut</button>
    {/* <GoogleAuth/> */}
    </>
  )
}

export default App
