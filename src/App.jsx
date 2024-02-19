import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/conf'
import Signup from './components/Signup'
import authservice from './firebase/auth'
import service from './firebase/config'

function App() {
  // console.log(typeof(conf.firebaseApiKey));
  const [user, setUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await authservice.userStatus();
        setUser(currentUser);
        console.log(currentUser);
      } catch (error) {
        console.log("Error fetching user status:", error);
      }
    };

    fetchUser();
  }, []);
  const put = ()=>{
    authservice.writedata();
  }

  const handleLogout= async () => {
    try {
      await authservice.Logout()
      setUser(null);
    } catch (error) {
      console.log("FIREBASE SIGNUP ERROR", error);
    }
  };

  if(user===null){
    return(
      <>
    <h1>FIreBAse PRoject</h1>
    <Signup/>
    </>
    )
  }
  return (
    <>
    <h1>congrats on login</h1>
    <button onClick={handleLogout}>Logout</button>

    <div className='PutData'>
      <button onClick={put}>putData</button>
    </div>
    </>
  )
}

export default App
