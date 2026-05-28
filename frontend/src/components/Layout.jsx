import { Link } from "react-router-dom";

export default function Layout({children}){

return(

<div className="min-h-screen bg-[#F5F7FB]">

<nav className="bg-white shadow-md">

<div className="max-w-7xl mx-auto px-4 lg:px-8 py-5">

<div className="

flex
flex-col
lg:flex-row

items-center
justify-between
gap-5

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

<div className="

flex
flex-wrap
justify-center
gap-6

text-sm
md:text-base

font-semibold

">

<Link to="/dashboard">Dashboard</Link>

<Link to="/upload">Upload</Link>

<Link to="/reviews">Reviews</Link>

<Link to="/audit">Audit Logs</Link>

</div>

</div>

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