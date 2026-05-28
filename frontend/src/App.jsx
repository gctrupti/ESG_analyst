import {

BrowserRouter,
Routes,
Route,
Navigate

} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Reviews from "./pages/Reviews";
import AuditLogs from "./pages/AuditLogs";

function ProtectedRoute({children}){

const isLoggedIn =

localStorage.getItem(

"loggedIn"

)==="true";

return isLoggedIn

? children

: <Navigate to="/" />;

}

function App(){

return(

<BrowserRouter>

<Routes>

<Route

path="/"

element={<Login/>}

/>

<Route

path="/dashboard"

element={

<ProtectedRoute>

<Dashboard/>

</ProtectedRoute>

}

/>

<Route

path="/upload"

element={

<ProtectedRoute>

<Upload/>

</ProtectedRoute>

}

/>

<Route

path="/reviews"

element={

<ProtectedRoute>

<Reviews/>

</ProtectedRoute>

}

/>

<Route

path="/audit"

element={

<ProtectedRoute>

<AuditLogs/>

</ProtectedRoute>

}

/>

</Routes>

</BrowserRouter>

)

}

export default App;