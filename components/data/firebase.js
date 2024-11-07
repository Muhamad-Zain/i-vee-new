// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, listAll, ref as storageRef, uploadBytes  } from 'firebase/storage'
import { getDatabase, child, get, ref, set, push } from 'firebase/database'
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'
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
// const db = getFirestore(app)


// const fetchImage = async (name) => {
//     const imgPath = `image/${name}`
//     const imgRef = storageRef(storage, imgPath)
//     try {
//         const url = await getDownloadURL(imgRef)
//         return url
//     } catch (error) {
//         console.log("image" , error);
//     }
// }

// fetch Data firebase

const fetchData = async (id) => {
    
    try {
        const dbRef = ref(database);
        const data = await get(child(dbRef, `/weddings/${id}`))
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

// fetch Background Image 
const fetchBg = async (id) => {
    try {
        const galleryRef = storageRef(storage, `${id}`); // Referensi ke folder '01/galery'
        
        const images = [];
        const listResult = await listAll(galleryRef); // Mendapatkan semua item dalam folder

        for (const item of listResult.items) {
            const url = await getDownloadURL(item); // Mendapatkan URL dari setiap item
            images.push(url); // Menyimpan URL ke array
        }

        return images;
    } catch (error) {
        console.log("Gagal mendapatkan gambar:", error);
        return [];
    }
    // const imqColect =  collection(db, `${id}`)

    // try {
    //     const snapshot  = await getDocs
    // } catch (error) {
        
    // }
}

// Fetch Image Galery from Firebase
const fetchGalery = async (id) => {
    try {
        const galleryRef = storageRef(storage, `${id}/gallery`); // Referensi ke folder '01/galery'
        
        const images = [];
        const listResult = await listAll(galleryRef); // Mendapatkan semua item dalam folder

        for (const item of listResult.items) {
            const url = await getDownloadURL(item); // Mendapatkan URL dari setiap item
            images.push(url); // Menyimpan URL ke array
        }

        return images;
    } catch (error) {
        console.log("Gagal mendapatkan gambar:", error);
        return [];
    }
}


// Send Data String to Firebase
const addDataToFirebase = async (id, formData) => {
    // const id = formData.id || Date.now().toString();
    // const id =  Date.now().toString();

    try {
      await set(ref(database, `/weddings/${id}`), formData);
      console.log("Data successfully added!");
    } catch (error) {
      console.error("Error adding data:", error);
    }
    
  };
  
  const uploadFileToFirebase = async (file, category, id) => {
    if (!file || !file.name) {
        console.error(`Error: File or file name is undefined for category ${category}`);
        return;
      }
    try {
      // Membuat referensi file di Firebase Storage
      const fileRef = storageRef(storage, `${id}/${category}/${file.name}`);
  
      // Meng-upload file ke Firebase Storage
      await uploadBytes(fileRef, file);
  
      // Mendapatkan URL file setelah di-upload
      const downloadURL = await getDownloadURL(fileRef);
  
      // Menyimpan metadata file di Firebase Realtime Database
      const dbPathRef = ref(database, `images/${id}/${category}`);
      const newImageRef = push(dbPathRef);
      await set(newImageRef, {
        name: file.name,
        url: downloadURL,
      });
  
      // Mengembalikan data file yang di-upload
      return { category, name: file.name, url: downloadURL };
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("File upload failed.");
    }
  };
  
  // Fungsi untuk meng-upload beberapa file sekaligus
  export const uploadFiles = async (id, files, categories) => {
    try {
    //   const newId = uuidv4();  // Membuat ID unik untuk setiap upload
  
      const uploadedFiles = [];
  
      // Meng-upload file dari setiap kategori
      for (const category of categories) {
        if (files[category]) {
          // Jika ada file di kategori tersebut, upload file tersebut
          const uploadedFile = await uploadFileToFirebase(files[category], category, id);
          uploadedFiles.push(uploadedFile);
        }
      }
  
      // Meng-upload file galeri
      if (files.galery && files.galery.length > 0) {
        for (const file of files.galery) {
          const uploadedFile = await uploadFileToFirebase(file, "gallery", id);
          uploadedFiles.push(uploadedFile);
        }
      }
  
      // Mengembalikan hasil upload file
      return uploadedFiles;
    } catch (error) {
      console.error("Error uploading files:", error);
      throw new Error("File upload failed.");
    }
  };

export { storage, database, fetchGalery, fetchBg, fetchData, addDataToFirebase}