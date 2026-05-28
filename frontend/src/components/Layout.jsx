import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function Layout({children}){

const [open,setOpen]=useState(false);

const navigate=useNavigate();

function logout(){

localStorage.removeItem(

"loggedIn"

);

navigate("/");

}

return(

<div className="min-h-screen bg-[#F5F7FB]">

<nav className="

bg-white
shadow-md

sticky
top-0
z-50

">

<div className="

max-w-7xl
mx-auto

px-4
lg:px-8

py-5

">

<div className="

flex
justify-between
items-center

">

<h1 className="

text-2xl
md:text-4xl

font-black

bg-gradient-to-r
from-blue-600
to-indigo-700

bg-clip-text
text-transparent

">

🌍 ESG Analyst

</h1>

<button

className="lg:hidden text-2xl"

onClick={()=>setOpen(!open)}

>

☰

</button>

<div className="

hidden
lg:flex

items-center
gap-8

text-sm
md:text-base

font-semibold

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

px-5
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

lg:hidden

flex
flex-col

gap-5

pt-6

font-semibold

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

</div>

</nav>

<div className="

max-w-7xl
mx-auto

px-4
md:px-6
lg:px-8

py-10

">

{children}

</div>

</div>

)

}