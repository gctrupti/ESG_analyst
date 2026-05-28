import {useEffect,useState} from "react";
import Layout from "../components/Layout";

export default function Reviews(){

const [records,setRecords]=useState([]);

useEffect(()=>{

loadRecords();

},[])

async function loadRecords(){

const res = await fetch(

"http://127.0.0.1:8000/api/records/"

);

const data = await res.json();

setRecords(data);

}

async function review(id,decision){

await fetch(

`http://127.0.0.1:8000/api/review/${id}/`,

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

decision,

comment:"Reviewed from React"

})

}

)

loadRecords();

}

return(

<Layout>

<h1 className="text-4xl font-bold text-gray-800 mb-10">

Review Records

</h1>

<div className="bg-white rounded-3xl shadow-lg overflow-hidden">

<div className="overflow-x-auto">

<table className="w-full">

<thead className="bg-blue-700 text-white">

<tr>

<th className="p-5">Activity</th>

<th>Status</th>

<th>Suspicious</th>

<th>Actions</th>

</tr>

</thead>

<tbody>

{records.map(record=>(

<tr
key={record.id}
className="border-b hover:bg-slate-50"
>

<td className="p-5">

{record.activity_type}

</td>

<td>

<span className={`px-4 py-2 rounded-full text-sm font-semibold

${record.status==="APPROVED"

? "bg-green-100 text-green-700"

: record.status==="FLAGGED"

? "bg-red-100 text-red-700"

: "bg-yellow-100 text-yellow-700"}

`}>

{record.status}

</span>

</td>

<td>

{record.suspicious_flag

? "🚨 YES"

: "✅ NO"}

</td>

<td className="flex gap-3 py-4">

<button
onClick={()=>
review(
record.id,
"APPROVED"
)
}
className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
>

Approve

</button>

<button
onClick={()=>
review(
record.id,
"FLAGGED"
)
}
className="bg-yellow-500 text-white px-4 py-2 rounded-xl"
>

Flag

</button>

<button
onClick={()=>
review(
record.id,
"REJECTED"
)
}
className="bg-red-600 text-white px-4 py-2 rounded-xl"
>

Reject

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

</Layout>

)

}