import { useState } from "react";
import Layout from "../components/Layout";

export default function Upload() {

const [file,setFile]=useState(null);
const [loading,setLoading]=useState(false);
const [message,setMessage]=useState("");

async function handleUpload(endpoint){

if(!file){

alert("Please choose a file");
return;

}

setLoading(true);
setMessage("");

const formData=new FormData();
formData.append("file",file);

try{

const response = await fetch(

`https://esg-analyst.onrender.com/api/upload/${endpoint}/`,

{
method:"POST",
body:formData
}

);

const data=await response.json();

if(response.ok){

setMessage(
data.message || "Upload successful"
);

}

else{

setMessage(
data.error || "Upload failed"
);

}

}

catch(err){

console.log(err);

setMessage("Upload failed");

}

setLoading(false);

}

return(

<Layout>

<div className="mb-12">

<h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-4">

Data Ingestion

</h1>

<p className="text-slate-500">

Upload ESG data from enterprise systems.

</p>

</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

{/* SAP */}

<div className="bg-white rounded-[35px] shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

<h2 className="text-2xl font-bold text-blue-700 mb-3">

SAP ERP

</h2>

<p className="text-slate-500 mb-6">

Fuel & Procurement exports

</p>

<ul className="text-sm text-slate-600 mb-8 space-y-2">

<li>• Diesel / Petrol</li>
<li>• Flat File / CSV Export</li>
<li>• Scope 1 Emissions</li>

</ul>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
className="mb-6 block w-full"
/>

<button

disabled={loading}

onClick={()=>handleUpload("sap")}

className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-4 rounded-2xl hover:scale-105 transition disabled:opacity-50"

>

Upload SAP Data

</button>

</div>

{/* Utility */}

<div className="bg-white rounded-[35px] shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

<h2 className="text-2xl font-bold text-green-700 mb-3">

Utility Portal

</h2>

<p className="text-slate-500 mb-6">

Electricity & Facility Data

</p>

<ul className="text-sm text-slate-600 mb-8 space-y-2">

<li>• Electricity Usage</li>
<li>• Meter / Billing Data</li>
<li>• Scope 2 Emissions</li>

</ul>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
className="mb-6 block w-full"
/>

<button

disabled={loading}

onClick={()=>handleUpload("utility")}

className="w-full bg-gradient-to-r from-green-500 to-emerald-700 text-white font-semibold py-4 rounded-2xl hover:scale-105 transition disabled:opacity-50"

>

Upload Utility Data

</button>

</div>

{/* Travel */}

<div className="bg-white rounded-[35px] shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

<h2 className="text-2xl font-bold text-violet-700 mb-3">

Concur / Navan

</h2>

<p className="text-slate-500 mb-6">

Corporate Travel Platform

</p>

<ul className="text-sm text-slate-600 mb-8 space-y-2">

<li>• Flights</li>
<li>• Hotels / Taxi</li>
<li>• Scope 3 Emissions</li>

</ul>

<input
type="file"
onChange={(e)=>setFile(e.target.files[0])}
className="mb-6 block w-full"
/>

<button

disabled={loading}

onClick={()=>handleUpload("travel")}

className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-700 text-white font-semibold py-4 rounded-2xl hover:scale-105 transition disabled:opacity-50"

>

Upload Travel Data

</button>

</div>

</div>

{loading && (

<div className="mt-10 bg-blue-100 text-blue-700 rounded-2xl p-5 font-semibold">

Uploading...

</div>

)}

{message && (

<div className="mt-10 bg-green-100 text-green-700 rounded-2xl p-5 font-semibold">

{message}

</div>

)}

</Layout>

);

}