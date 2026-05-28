import { useEffect,useState } from "react";
import Layout from "../components/Layout";

export default function AuditLogs(){

const [logs,setLogs]=useState([]);

useEffect(()=>{

fetch(

"https://esg-analyst.onrender.com/api/audit/"

)

.then(res=>res.json())

.then(data=>setLogs(data))

.catch(err=>console.log(err));

},[]);

return(

<Layout>

<h1 className="text-4xl font-bold text-gray-800 mb-10">

Audit Logs

</h1>

<div className="bg-white rounded-3xl shadow-lg overflow-hidden">

<div className="overflow-x-auto">

<table className="w-full">

<thead className="bg-blue-700 text-white">

<tr>

<th className="p-5">Reviewer</th>

<th>Decision</th>

<th>Comment</th>

</tr>

</thead>

<tbody>

{logs.map(log=>(

<tr
key={log.id}
className="border-b hover:bg-slate-50"
>

<td className="p-5">

{log.reviewer}

</td>

<td>

{log.decision}

</td>

<td>

{log.comment || "-"}

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