import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

const navigate = useNavigate();

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");

function handleLogin(){

if(

username==="admin" &&

password==="admin@098"

){

localStorage.setItem(

"loggedIn",

"true"

);

navigate("/dashboard");

}

else{

setError(

"Invalid username or password"

);

}

}

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

value={username}

onChange={(e)=>

setUsername(

e.target.value

)

}

placeholder="Username"

className="w-full border p-4 rounded-xl mb-5"

/>

<input

type="password"

value={password}

onChange={(e)=>

setPassword(

e.target.value

)

}

placeholder="Password"

className="w-full border p-4 rounded-xl mb-4"

/>

{error && (

<p className="text-red-600 text-sm mb-5 text-center">

{error}

</p>

)}

<button

onClick={handleLogin}

className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-xl font-semibold transition"

>

Login

</button>

<p className="text-center text-slate-400 text-sm mt-6">

Demo Login → admin / admin@098

</p>

</div>

</div>

)

}