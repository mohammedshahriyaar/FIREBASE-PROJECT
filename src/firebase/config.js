import conf from "../conf/conf";
import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {collection,addDoc,getDocs} from "firebase/firestore"
export class Service {
  constructor() {
    const firebaseConfig = {
      apiKey: conf.firebaseApiKey,
      authDomain: conf.firebaseAuthDomain,
      projectId: conf.firebaseProjectId,
      storageBucket: conf.firebaseStorageId,
      messagingSenderId: conf.firebaseMessagingSenderId,
      appId: conf.firebaseAppId,
    };

    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  writedata = async () => {
    console.log("started");
    try {
      // const result = await addDoc(collection(this.db,'cities'),{
      //     name:"HYD",
      //     pin:123,
      //     lat:1234,
      //     long:4566,
      // })
      // console.log(result);
      const querySnapshot = await getDocs(collection(this.db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      console.log(error);
    }
  };
}

const service = new Service();
export default service;