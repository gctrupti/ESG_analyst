import { useNavigate } from "react-router-dom";

export default function Login(){

const navigate = useNavigate();

return(

<div className="min-h-screen bg-gradient-to-r from-blue-50 to-slate-100 flex justify-center items-center px-5">

<div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10">

<h1 className="text-4xl font-bold text-blue-700 text-center mb-4">

ESG Analyst Portal

</h1>

<p className="text-gray-500 text-center mb-8">

Secure ESG Review Dashboard

</p>

<input
placeholder="Username"
className="w-full border p-4 rounded-xl mb-5"
/>

<input
type="password"
placeholder="Password"
className="w-full border p-4 rounded-xl mb-8"
/>

<button
onClick={()=>navigate("/dashboard")}
className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition"
>

Login

</button>

</div>

</div>

)

}