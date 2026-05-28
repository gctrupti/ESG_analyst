export default function Table({

headers,
children

}){

return(

<div className="

bg-white
rounded-[35px]
shadow-xl

overflow-hidden

">

<div className="overflow-x-auto">

<table className="

min-w-[900px]
w-full

">

<thead>

<tr className="

bg-gradient-to-r
from-blue-600
to-indigo-700

text-white

">

{headers.map((header,index)=>(

<th
key={index}
className="

px-6
py-5

text-left
whitespace-nowrap

"

>

{header}

</th>

))}

</tr>

</thead>

<tbody>

{children}

</tbody>

</table>

</div>

</div>

)

}