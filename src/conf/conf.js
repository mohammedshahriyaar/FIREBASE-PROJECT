const conf ={
    firebaseApiKey:String(import.meta.env.VITE_FIREBASE_API_KEY),
    firebaseAuthDomain:String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
    firebaseProjectId:String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
    firebaseStorageId:String(import.meta.env.VITE_FIREBASE_STORAGE_ID),
    firebaseMessagingSenderId:String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
    firebaseAppId:String(import.meta.env.VITE_FIREBASE_APP_ID),
}

export default conf;