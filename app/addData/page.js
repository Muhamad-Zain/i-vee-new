'use client'
import { addDataToFirebase, uploadFiles } from "@/components/data/firebase"
import { useState } from "react"
// import {v4 as uuid4} from 'uuid'

export default function AddData() {
    // const [coba, setCoba] = useState()
    const id =  Date.now().toString();

    const [data, setData] = useState({
        // id: Date now(),
        name:{mens:'',grils:'', namaLengkap:{mens:'',grils:''}},
        date: {akad:'',resepsi:'', all:'',time:{akad:'',resepsi:''}},
        parent:{mens:'',grils:''},
        location: {akad:'',resepsi:''},
        gift: {one:{nameBank:'',rekening:'',an:''},two:{nameBank:'',rekening:'',an:''},home:''},
        story: {one:'',two:'',tree:''},
        expresion: {},
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
      setFiles((prevFiles) => ({
        ...prevFiles,
        galery:  [...prevFiles.galery, ...Array.from(selectedFiles)]
      }));
    } else {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: selectedFiles[0]
      }));
    }
  };

  console.log(files);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    const id =  Date.now().toString();

    try {
      addDataToFirebase(id,data);
      console.log("Submitted data:", data);
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
      // 'galery'
      ]);

      // Log hasil upload
      console.log("Uploaded files:", uploadedFiles);
      // Anda bisa memperbarui UI atau state di sini berdasarkan file yang telah di-upload
    } catch (error) {
      console.error("Error uploading files:", error);
    }
    
  };

    return(
        <section className="max-w-[400px] m-auto">
            <div>
                <h3 className="text-center text-xl w-3/4 m-auto py-5 playfair">Add Data to template wedings exlusive</h3>
                <form 
                    onSubmit={handleSubmit}
                    className="p-2 text-black">
                        {/* <input type="text" placeholder="Id " onChange={(e) => handleChange(e, 'id')} /> */}
                    <label className="text-white text-lg italic">Nama </label>
                    <input type="text" name="name.mens" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama Pria" onChange={handleChange} />
                    <input type="text" name="name.grils" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama wanita" onChange={handleChange} />
                    <p className="text-white">Nama Lengkap</p>
                    <input type="text" name="name.namaLengkap.mens" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama Lengkap Pria" onChange={handleChange}/>
                    <input type="text" name="name.namaLengkap.grils" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama Lengkap wanita" onChange={handleChange} />

                    <label className="text-white text-lg italic">Date</label>
                    <input type="date" name="date.all" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="" onChange={handleChange} />
                    <p className="text-white">Akad</p>
                    <input type="text" name="date.akad" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex.31 Desember 2025" onChange={handleChange}/>
                    <p className="text-white">Resepsi</p>
                    <input type="text" name="date.resepsi" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex.31 Desember 2025" onChange={handleChange}/>

                    <label className="text-white text-lg italic">Time</label>
                    <p className="text-white">Akad</p>
                    <input type="text" name="date.time.akad" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. 09.00" onChange={handleChange}/>
                    <p className="text-white">Resepsi</p>
                    <input type="text" name="date.time.resepsi" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. 09.00" onChange={handleChange} />
                    
                    <label className="text-white text-lg italic">Location</label>
                    <p className="text-white">Akad</p>
                    <input type="text" name="location.akad" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. https://link.com" onChange={handleChange} />
                    <p className="text-white">Resepsi</p>
                    <input type="text" name="location.resepsi" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. https://link.com" onChange={handleChange} />

                    <label className="text-white text-lg italic">Name Parent</label>
                    <p className="text-white">Mens</p>
                    <input type="text" name="parent.mens" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. Putra/Putri dari Bpk... dan ibu ..." onChange={handleChange}/>
                    <p className="text-white">Grils</p>
                    <input type="text" name="parent.grils" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. Putra/Putri dari Bpk... dan ibu ..." onChange={handleChange}/>

                    <label className="text-xl text-white italic">Gift</label>
                    <p className="text-white">Rekening 1</p>
                    <input type="text" name="gift.one.nameBank" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Nama Rekening " onChange={handleChange}/>
                    <input type="number" name="gift.one.rekening" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. 3157586579596xxx" onChange={handleChange}/>
                    <input type="text" name="gift.one.an" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. a.n Zain" onChange={handleChange} />
                    <p className="text-white">Rekening 2</p>
                    <input type="text" name="gift.two.nameBank" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Nama Rekening " onChange={handleChange} />
                    <input type="number" name="gift.two.rekening" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. 3157586579596xxx" onChange={handleChange}/>
                    <input type="text" name="gift.two.an" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. a.n Zain" onChange={handleChange}/>
                    <p className="text-white">Alamat Rumah (kado)</p>
                    <input type="text" name="gift.home" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. jl.Sudirman no.14 Jakarta Utara" onChange={handleChange}/>

                    <label className="text-white text-xl italic">Story</label>
                    <p className="text-white">Paragraf 1</p>
                    <input type="text" name="story.one" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. " onChange={handleChange} />
                    <p className="text-white">Paragraf 2</p>
                    <input type="text" name="story.two" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. " onChange={handleChange} />
                    <p className="text-white">Paragraf 3</p>
                    <input type="text" name="story.tree" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. " onChange={handleChange} />

                    <label className="text-white text-xl italic">Backround Weddings</label>
                    <p className="text-white py-2">background Hero</p>
                    <input type="file" className="text-white" onChange={handleFileChange} name="hero" />
                    <p className="text-white py-2">background Home</p>
                    <input type="file" className="text-white" onChange={handleFileChange} name="home"/>
                    <p className="text-white py-2">profile mens</p>
                    <input type="file" className="text-white" onChange={handleFileChange} name="groom"/>
                    <p className="text-white py-2">profile grils</p>
                    <input type="file" className="text-white"  onChange={handleFileChange} name="bride"/>
                    <p className="text-white py-2">background Location</p>
                    <input type="file" className="text-white" onChange={handleFileChange} name="location"/>
                    <p className="text-white py-2">background Love Story</p>
                    <input type="file" className="text-white" onChange={handleFileChange} name="story" />
                    <p className="text-white py-2">background Wedding expresion</p>
                    <input type="file" className="text-white" onChange={handleFileChange} name="expresion" />
                    <p className="text-white py-2">background RSVP & Gift</p>
                    <input type="file" className="text-white" onChange={handleFileChange} name="rsvp" />

                    <label className="text-white text-xl italic grid">Galery</label>
                    <p className="text-white py-2">foto 1</p>
                    <input type="file" className="text-white grid" onChange={handleFileChange} name="galery" multiple />
                    <p className="text-white py-2">foto 2</p>
                    <input type="file" className="text-white grid" onChange={handleFileChange} name="galery" multiple/>
                    <p className="text-white py-2">foto 3</p>
                    <input type="file" className="text-white grid" onChange={handleFileChange} name="galery" multiple/>
                    <p className="text-white py-2">foto 4</p>
                    <input type="file" className="text-white grid" onChange={handleFileChange} name="galery" multiple/>
                    <p className="text-white py-2">foto 5</p>
                    <input type="file" className="text-white grid" onChange={handleFileChange} name="galery" multiple/>
                    <p className="text-white py-2">foto 6</p>
                    <input type="file" className="text-white grid" onChange={handleFileChange} name="galery" multiple/>
                    <p className="text-white py-2">foto 7</p>
                    <input type="file" className="text-white grid" onChange={handleFileChange} name="galery" multiple/>
                    <p className="text-white py-2">foto 8</p>
                    <input type="file" className="text-white grid" onChange={handleFileChange} name="galery" multiple/>

                    <button type="submit" className="bg-slate-300 py-2 rounded-md">Add Data</button>
                    
                </form>
            </div>
        </section>
    )
}