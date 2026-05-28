import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

const [open,setOpen] = useState(false);

return(

<nav className="bg-white shadow-md sticky top-0 z-50">

<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<h1 className="text-2xl font-bold text-blue-700">

ESG Analyst

</h1>

<button
className="md:hidden"
onClick={()=>setOpen(!open)}
>

☰

</button>

<div className="hidden md:flex gap-8 font-medium text-gray-700">

<Link to="/dashboard">Dashboard</Link>

<Link to="/upload">Upload</Link>

<Link to="/reviews">Reviews</Link>

<Link to="/audit">Audit Logs</Link>

</div>

</div>

{open && (

<div className="md:hidden flex flex-col px-6 pb-5 gap-4 bg-white shadow-lg">

<Link to="/dashboard">Dashboard</Link>

<Link to="/upload">Upload</Link>

<Link to="/reviews">Reviews</Link>

<Link to="/audit">Audit Logs</Link>

</div>

)}

</nav>

)

}