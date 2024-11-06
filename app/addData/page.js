export default function AddData() {
    return(
        <section className="max-w-[400px] m-auto">
            <div>
                <h3 className="text-center text-xl w-3/4 m-auto py-5 playfair">Add Data to template wedings exlusive</h3>
                <form className="p-2 text-black">
                    <label className="text-white text-lg italic">Nama </label>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama Pria" />
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama wanita" />
                    <p className="text-white">Nama Lengkap</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama Lengkap Pria" />
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama Lengkap wanita" />

                    <label className="text-white text-lg italic">Date</label>
                    <input type="date" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Masukkan Nama" />
                    <p className="text-white">Akad</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex.31 Desember 2025" />
                    <p className="text-white">Resepsi</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex.31 Desember 2025" />

                    <label className="text-white text-lg italic">Time</label>
                    <p className="text-white">Akad</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. 09.00" />
                    <p className="text-white">Resepsi</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. 09.00" />
                    
                    <label className="text-white text-lg italic">Location</label>
                    <p className="text-white">Akad</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. https://link.com" />
                    <p className="text-white">Resepsi</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. https://link.com" />

                    <label className="text-white text-lg italic">Name Parent</label>
                    <p className="text-white">Mens</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. Putra/Putri dari Bpk... dan ibu ..." />
                    <p className="text-white">Grils</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. Putra/Putri dari Bpk... dan ibu ..." />

                    <label className="text-xl text-white italic">Gift</label>
                    <p className="text-white">Rekening 1</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Nama Rekening " />
                    <input type="number" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. 3157586579596xxx" />
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. a.n Zain" />
                    <p className="text-white">Rekening 2</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="Nama Rekening " />
                    <input type="number" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. 3157586579596xxx" />
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. a.n Zain" />
                    <p className="text-white">Alamat Rumah (kado)</p>
                    <input type="text" className="w-full outline-none my-1 rounded-md px-2 py-2" placeholder="ex. jl.Sudirman no.14 Jakarta Utara" />
                    
                    <label className="text-white text-xl italic">Story</label>
                    <p className="text-white">foto 1</p>
                    <input type="file" className="text-white grid" />
                    <p className="text-white">foto 2</p>
                    <input type="file" className="text-white grid" />
                    <p className="text-white">foto 3</p>
                    <input type="file" className="text-white grid" />
                    <p className="text-white">foto 4</p>
                    <input type="file" className="text-white grid" />
                    <p className="text-white">foto 5</p>
                    <input type="file" className="text-white grid" />
                    <p className="text-white">foto 6</p>
                    <input type="file" className="text-white grid" />
                    <p className="text-white">foto 7</p>
                    <input type="file" className="text-white grid" />
                    <p className="text-white">foto 8</p>
                    <input type="file" className="text-white grid" />
                    
                </form>
            </div>
        </section>
    )
}