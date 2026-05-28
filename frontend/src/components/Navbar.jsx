import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){

const [open,setOpen]=useState(false);

const navigate = useNavigate();

function logout(){

localStorage.removeItem(

"loggedIn"

);

navigate("/");

}

return(

<nav className="bg-white shadow-md sticky top-0 z-50">

<div className="

max-w-7xl
mx-auto

px-6
py-4

flex
justify-between
items-center

">

<h1 className="

text-2xl
font-bold
text-blue-700

">

ESG Analyst

</h1>

<button

className="md:hidden text-2xl"

onClick={()=>setOpen(!open)}

>

☰

</button>

<div className="

hidden
md:flex

items-center
gap-8

font-medium
text-gray-700

">

<Link to="/dashboard">

Dashboard

</Link>

<Link to="/upload">

Upload

</Link>

<Link to="/reviews">

Reviews

</Link>

<Link to="/audit">

Audit Logs

</Link>

<button

onClick={logout}

className="

bg-red-600
hover:bg-red-700

text-white

px-4
py-2

rounded-xl
transition

"

>

Logout

</button>

</div>

</div>

{open && (

<div className="

md:hidden

flex
flex-col

px-6
pb-5

gap-4

bg-white
shadow-lg

">

<Link

to="/dashboard"

onClick={()=>setOpen(false)}

>

Dashboard

</Link>

<Link

to="/upload"

onClick={()=>setOpen(false)}

>

Upload

</Link>

<Link

to="/reviews"

onClick={()=>setOpen(false)}

>

Reviews

</Link>

<Link

to="/audit"

onClick={()=>setOpen(false)}

>

Audit Logs

</Link>

<button

onClick={logout}

className="

bg-red-600
text-white

py-3

rounded-xl

"

>

Logout

</button>

</div>

)}

</nav>

)

}