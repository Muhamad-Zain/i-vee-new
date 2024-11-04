// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref as storageRef  } from 'firebase/storage'
import { getDatabase, child, get, ref } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: "tryproject-1bfca",
    storageBucket: "tryproject-1bfca.appspot.com",
    messagingSenderId: "371216823598",
    appId: "1:371216823598:web:b28bccdbcd154a4e86f6bf",
    measurementId: "G-PMPS3HMJ7E"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const storage = getStorage(app)


const fetchImage = async (name) => {
    const imgPath = `image/${name}`
    const imgRef = storageRef(storage, imgPath)
    try {
        const url = await getDownloadURL(imgRef)
        // setImage(url)
        return url
    } catch (error) {
        console.log("image" , error);
    }
}


const fetchData = async (id) => {
    
    try {
        const dbRef = ref(database);
        // const path = `wedings/${id}`
        // const dbRef = ref(database, path )
        const data = await get(child(dbRef, `${id}`))
        // const data = await get(dbRef)
        if (data.exists()) {
            return data.val()
        } else {
            console.log('no data evaible');
            return null
        }
    } catch (error) {
        console.log('error fecth data', error);
        return null
    }
}

export { storage, fetchImage, fetchData, database}