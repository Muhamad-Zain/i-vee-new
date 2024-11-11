'use client'
import { addDataToFirebase, loginUser, uploadFiles, auth } from "@/components/data/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"



export default function AddData() {
    const [newId, setNewId] = useState('')  
    const [message, setMessage] = useState(false)
    // const [auth, setAuth ] = useState(false) 
    // const [name, setName] = useState('')
    // const [password, setPassword] = useState('')
    
    

    const [data, setData] = useState({
        // id: Date now(),
        name:{mens:'',grils:'', namaLengkap:{mens:'',grils:''}},
        date: {akad:'',resepsi:'', all:'',time:{akad:'',resepsi:''}},
        parent:{mens:'',grils:''},
        location: {akad:'',resepsi:''},
        gift: {one:{nameBank:'',rekening:'',an:''},two:{nameBank:'',rekening:'',an:''},home:''},
        story: {one:'',two:'',tree:''},
        expresion:'',
        rsvp: ''
    })
    const [files, setFiles] = useState({
      hero: null,
      home: null,
      groom: null,
      bride: null,
      location: null,
      expresion: null,
      galery: null,
      rsvp: null,
      story: null,
      galery: []
    })



  const updateNestedState = (path, value) => {
    setData(prevData => {
      const keys = path.split(".");
      const lastKey = keys.pop();
      const deepObject = keys.reduce((acc, key) => acc[key] = { ...acc[key] }, prevData);
      deepObject[lastKey] = value;
      return { ...prevData };
    });
  };

 

  const handleChange = e => {
    const { name, value } = e.target;
    updateNestedState(name, value);
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;

    if (name === "galery") {
      const newFiles = Array.from(selectedFiles).filter(f => f && f.name); // Pastikan hanya file valid
    
    setFiles((prevFiles) => ({
      ...prevFiles,
      galery: [...(prevFiles.galery || []), ...newFiles],
    }));
    } else {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: selectedFiles[0]
      }));
    }
  };


  const [idUndangan, setIdUndangan] = useState('')
  const handleSubmit = async(e) => {
    e.preventDefault();
    const id =  idUndangan;
    
    try {
      setMessage(true)
      await addDataToFirebase(id,data);
      // console.log("Submitted data:", data);
      // Panggil fungsi uploadFiles dengan state files dan kategori

      const uploadedFiles = await uploadFiles(id, files, [
      'hero',
      'home',
      'groom',
      'bride',
      'location',
      'expresion',
      'galery',
      'rsvp',
      'story',
      'galery'
      ]);
      setMessage(false)
      // Log hasil upload
      console.log("Uploaded files:", uploadedFiles);
      // Anda bisa memperbarui UI atau state di sini berdasarkan file yang telah di-upload
    } catch (error) {
      console.error("Error uploading files:", error);
    }

    setNewId(`i-vee-new.vercel.app/${id}`)
    alert('Berhasil kirim data ke firebase')
    
  };

 

  // console.log(name, password);
  
  // const handleAuth = () => {
  //   // e.preventDefault
  //   if (name === 'owner' && password === '123') {
  //     setAuth(true)
  //   } else {
  //     alert('Autenticarion gagal')
  //   }

  // }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verify, setVerify] = useState(false)
  console.log(email, password);
  const [err, setErr] = useState('')
  
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    setVerify(true)

  } catch (error) {
    console.error("Error during login:", error.message);
    setErr('gagal autentication', error.message)
    setTimeout(() => {
      setErr('')
    }, 3000);
    setVerify(false)
  }
};


    return(
        <section className="max-w-[400px] mb-20 m-auto">
            {verify ? (
              <div>
              <h3 className="text-center text-xl w-3/4 m-auto py-5 playfair">Add Data to template wedings exlusive</h3>
              <input type="text" placeholder="Id Undangan" className="text-black outline-none p-2 ml-2 rounded-md" onChange={(e) => setIdUndangan(e.target.value)} />

              <form 
                  onSubmit={handleSubmit}
                  className="p-2 text-black">
                      {/* <input type="text" placeholder="Id " onChange={(e) => handleChange(e, 'id')} /> */}
                  <label className="text-white text-lg italic">Nama </label>
                  <input type="text" name="name.mens" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="Masukkan Nama Pria" onChange={handleChange} />
                  <input type="text" name="name.grils" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="Masukkan Nama wanita" onChange={handleChange} />
                  <p className="text-white">Nama Lengkap</p>
                  <input type="text" name="name.namaLengkap.mens" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="Masukkan Nama Lengkap Pria" onChange={handleChange}/>
                  <input type="text" name="name.namaLengkap.grils" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="Masukkan Nama Lengkap wanita" onChange={handleChange} />

                  <label className="text-white text-lg italic">Date</label>
                  <input type="date" name="date.all" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="" onChange={handleChange} />
                  <p className="text-white">Akad</p>
                  <input type="text" name="date.akad" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex.31 Desember 2025" onChange={handleChange}/>
                  <p className="text-white">Resepsi</p>
                  <input type="text" name="date.resepsi" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex.31 Desember 2025" onChange={handleChange}/>

                  <label className="text-white text-lg italic">Time</label>
                  <p className="text-white">Akad</p>
                  <input type="text" name="date.time.akad" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex. 09.00" onChange={handleChange}/>
                  <p className="text-white">Resepsi</p>
                  <input type="text" name="date.time.resepsi" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex. 09.00" onChange={handleChange} />
                  
                  <label className="text-white text-lg italic">Location</label>
                  <p className="text-white">Akad</p>
                  <input type="text" name="location.akad" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex. https://link.com" onChange={handleChange} />
                  <p className="text-white">Resepsi</p>
                  <input type="text" name="location.resepsi" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex. https://link.com" onChange={handleChange} />

                  <label className="text-white text-lg italic">Name Parent</label>
                  <p className="text-white">Mens</p>
                  <input type="text" name="parent.mens" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex. Putra/Putri dari Bpk... dan ibu ..." onChange={handleChange}/>
                  <p className="text-white">Grils</p>
                  <input type="text" name="parent.grils" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex. Putra/Putri dari Bpk... dan ibu ..." onChange={handleChange}/>

                  <label className="text-xl text-white italic">Gift</label>
                  <p className="text-white">Rekening 1</p>
                  <input type="text" name="gift.one.nameBank" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="Nama Rekening " onChange={handleChange}/>
                  <input type="number" name="gift.one.rekening" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="ex. 3157586579596xxx" onChange={handleChange}/>
                  <input type="text" name="gift.one.an" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="ex. a.n Zain" onChange={handleChange} />
                  <p className="text-white">Rekening 2</p>
                  <input type="text" name="gift.two.nameBank" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="Nama Rekening " onChange={handleChange} />
                  <input type="number" name="gift.two.rekening" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="ex. 3157586579596xxx" onChange={handleChange}/>
                  <input type="text" name="gift.two.an" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="ex. a.n Zain" onChange={handleChange}/>
                  <p className="text-white">Alamat Rumah (kado)</p>
                  <input type="text" name="gift.home" className="w-full outline-none my-1 rounded-md px-2 py-2" required placeholder="ex. jl.Sudirman no.14 Jakarta Utara" onChange={handleChange}/>

                  <label className="text-white text-xl italic">Story</label>
                  <p className="text-white">Paragraf 1</p>
                  <input type="text" name="story.one" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="ex. " onChange={handleChange} />
                  <p className="text-white">Paragraf 2</p>
                  <input type="text" name="story.two" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="ex. " onChange={handleChange} />
                  <p className="text-white">Paragraf 3</p>
                  <input type="text" name="story.tree" className="w-full outline-none my-1 rounded-md px-2 py-2"  placeholder="ex. " onChange={handleChange} />

                  <label className="text-white text-xl italic">Backround Weddings</label>
                  <p className="text-white py-2">background Hero</p>
                  <input type="file" className="text-white" onChange={handleFileChange} required name="hero" />
                  <p className="text-white py-2">background Home</p>
                  <input type="file" className="text-white" onChange={handleFileChange} required name="home"/>
                  <p className="text-white py-2">profile mens</p>
                  <input type="file" className="text-white" onChange={handleFileChange} required name="groom"/>
                  <p className="text-white py-2">profile grils</p>
                  <input type="file" className="text-white"  onChange={handleFileChange} required name="bride"/>
                  <p className="text-white py-2">background Location</p>
                  <input type="file" className="text-white" onChange={handleFileChange} required name="location"/>
                  <p className="text-white py-2">background Love Story</p>
                  <input type="file" className="text-white" onChange={handleFileChange} required name="story" />
                  <p className="text-white py-2">background Wedding expresion</p>
                  <input type="file" className="text-white" onChange={handleFileChange} required name="expresion" />
                  <p className="text-white py-2">background RSVP & Gift</p>
                  <input type="file" className="text-white" onChange={handleFileChange} required name="rsvp" />

                  <label className="text-white text-xl italic grid">Galery</label>
                  <p className="text-white py-2">foto 1</p>
                  <input type="file" className="text-white grid" onChange={handleFileChange} required name="galery" multiple />
                  <p className="text-white py-2">foto 2</p>
                  <input type="file" className="text-white grid" onChange={handleFileChange} required name="galery" multiple/>
                  <p className="text-white py-2">foto 3</p>
                  <input type="file" className="text-white grid" onChange={handleFileChange} required name="galery" multiple/>
                  <p className="text-white py-2">foto 4</p>
                  <input type="file" className="text-white grid" onChange={handleFileChange} required name="galery" multiple/>
                  <p className="text-white py-2">foto 5</p>
                  <input type="file" className="text-white grid" onChange={handleFileChange} required name="galery" multiple/>
                  <p className="text-white py-2">foto 6</p>
                  <input type="file" className="text-white grid" onChange={handleFileChange} required name="galery" multiple/>
                  <p className="text-white py-2">foto 7</p>
                  <input type="file" className="text-white grid" onChange={handleFileChange} required name="galery" multiple/>
                  <p className="text-white py-2">foto 8</p>
                  <input type="file" className="text-white grid" onChange={handleFileChange} required name="galery" multiple/>

                  <button disabled={message ? true : false} type="submit" className={`${message ? 'bg-white w-full h-8 items-center ' : 'bg-slate-300 '}p-2 my-10 w-full flex justify-center  rounded-md`}>
                    {message ? (
                      <img className="loading-spinner" width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/spinner-frame-5.png" alt="spinner-frame-5"/>
                    ): 'Add Data'}
                    </button>
                  
              </form>
              <div className="">
                {newId ? (
                  <div className=" flex justify-around items-center ">
                    <p>{newId}</p>
                    <button onClick={() => navigator.clipboard.writeText(newId)} className="bg-green-400 p-1 px-2 rounded-md">Copy</button>
                  </div>
                ): null}
              </div>
          </div>
            ): (
              <div className="w-[90%] m-auto h-screen flex justify-center items-center">
                <div>
                  <h1 className=" text-center text-2xl mb-10 playfair">Autentication Owner</h1>
                  <label>username</label>
                  <input type="text" className="p-2 w-full rounded-lg outline-none  text-black" name="text"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label>password</label>
                  <input type="password" className="p-2 w-full rounded-lg outline-none  text-black" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <button onClick={() =>  loginUser(email, password)} className="bg-green-500 w-full p-2 rounded-lg my-5 border">Masuk</button>
                  <p className="text-green-700 text-xs">{err ? err : ''}</p>
                </div>
              </div>
            )}
        </section>
    )
}