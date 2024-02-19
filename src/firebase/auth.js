import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import conf from "../conf/conf";
import { initializeApp } from "firebase/app";
import { getFirestore,getDocs,collection} from "firebase/firestore";
export class AuthService{

    constructor(){
        const firebaseConfig = {
            // apiKey: "AIzaSyCRLj-RlODscyosY1uB38bszyYyvtnrlUU",
            apiKey:conf.firebaseApiKey,
            authDomain: conf.firebaseAuthDomain,
            projectId: conf.firebaseProjectId,
            storageBucket: conf.firebaseStorageId,
            messagingSenderId: conf.firebaseMessagingSenderId,
            appId: conf.firebaseAppId
          };
          const app = initializeApp(firebaseConfig);
          this.auth = getAuth(app);
          this.db = getFirestore(app);
    }

    
    async createAccount({auth,email,password}){
        try {
            const createnewAccount = await createUserWithEmailAndPassword(
                auth,
                email,
                password,
            )
            
        } catch (error) {
            console.log("FIREBASE SIGNUP ERROR",error)
            
        }
    }

    async Login({auth,email,password}){
        try {
            const loginuser =  await signInWithEmailAndPassword(
                auth,
                email,
                password
            )

            console.log("login successful");
            
        } catch (error) {
            console.log("FIREBASE LOGIN ERROR",error);
            
        }
    }

    // userStatus(){
    //     onAuthStateChanged(this.auth, (user)=>{
    //         if(user){
    //             return user;
    //         }
    //         else
    //         {
    //             return null;
    //         }
    //     })
    // }
    async userStatus() {
        return new Promise((resolve, reject) => {
            const unsubscribe = onAuthStateChanged(this.auth, (user) => {
                unsubscribe(); // Unsubscribe after the first change to avoid memory leaks
                resolve(user || null);
            }, (error) => {
                reject(error);
            });
        });
    }


    async Logout(){
        try {
            await signOut(this.auth);
            console.log("Logoutsuccess");
            return true;
        } catch (error) {
            console.log("FIREBASE ERROR LOGOUT",error);
        }
    }

    

    

    
}

const authservice = new AuthService();
export default authservice;