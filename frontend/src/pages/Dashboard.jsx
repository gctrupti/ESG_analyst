import {useEffect,useState} from "react";
import Layout from "../components/Layout";
import StatCard from "../components/StatCard";
import Table from "../components/Table";

export default function Dashboard(){

const [records,setRecords]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(()=>{

fetch("http://127.0.0.1:8000/api/records/")
.then(res=>res.json())
.then(data=>{

setRecords(data);

setLoading(false);

});

},[])

return(

<Layout>

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">

<div>

<h1 className="

text-5xl
md:text-6xl
font-black
text-slate-800

">

ESG Dashboard

</h1>

<p className="text-slate-500 mt-3">

Monitor ESG ingestion, anomalies, reviews and audit workflow.

</p>

</div>

{/* <button className="

bg-gradient-to-r
from-blue-600
to-indigo-700

text-white
font-semibold

px-6
py-4

rounded-2xl

hover:scale-105
transition

">

+ New Upload

</button> */}

</div>

<div className="

grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4

gap-7
mb-12

">

<StatCard
title="Total Records"
value={records.length}
color="from-blue-600 to-indigo-700"
/>

<StatCard
title="Suspicious"
value={records.filter(r=>r.suspicious_flag).length}
color="from-red-500 to-pink-600"
/>

<StatCard
title="Approved"
value={records.filter(r=>r.status==="APPROVED").length}
color="from-green-500 to-emerald-700"
/>

<StatCard
title="Pending"
value={records.filter(r=>r.status==="PENDING").length}
color="from-yellow-400 to-orange-500"
/>

</div>

{loading ? (

<div className="

bg-white
rounded-[35px]
shadow-xl
p-16
text-center

">

<div className="animate-pulse text-slate-500">

Loading dashboard...

</div>

</div>

)

:(

<Table

headers={[

"Activity",
"Source",
"Scope",
"Status",
"Value",
"Health"

]}

>

{records.map((record,index)=>{

const dataset=[

{
activity:record.activity_type,
source:"SAP ERP",
scope:"Scope 1"
},

{
activity:"Electricity Consumption",
source:"Utility Portal",
scope:"Scope 2"
},

{
activity:"Flight Emissions",
source:"Concur / Navan",
scope:"Scope 3"
}

];

const row=dataset[index % 3];

return(

<tr
key={record.id}
className="

border-b
border-slate-100

hover:bg-blue-50

transition-all

"

>

<td className="px-6 py-5 whitespace-nowrap font-semibold text-slate-800">

{row.activity}

</td>

<td className="px-6 py-5 whitespace-nowrap">

<span className="

bg-blue-100
text-blue-700

px-4
py-2

rounded-full
text-sm
font-semibold

">

{row.source}

</span>

</td>

<td className="px-6 py-5 whitespace-nowrap">

<span className="

bg-violet-100
text-violet-700

px-4
py-2

rounded-full
text-sm
font-semibold

">

{row.scope}

</span>

</td>

<td className="px-6 py-5 whitespace-nowrap">

<span className={`

px-4
py-2

rounded-full
text-sm
font-semibold

${record.status==="APPROVED"

? "bg-green-100 text-green-700"

: record.status==="FLAGGED"

? "bg-red-100 text-red-700"

: "bg-yellow-100 text-yellow-700"}

`}>

{record.status}

</span>

</td>

<td className="px-6 py-5 whitespace-nowrap font-medium">

{record.normalized_value}

{" "}

{record.normalized_unit || ""}

</td>

<td className="px-6 py-5 whitespace-nowrap">

{record.suspicious_flag ? (

<span className="

bg-red-100
text-red-700

px-4
py-2

rounded-full
text-sm
font-bold

">

⚠ Suspicious

</span>

):(

<span className="

bg-green-100
text-green-700

px-4
py-2

rounded-full
text-sm
font-bold

">

✓ Clean

</span>

)}

</td>

</tr>

)

})}

</Table>

)}

</Layout>

)

}