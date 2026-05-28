import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Reviews from "./pages/Reviews";
import AuditLogs from "./pages/AuditLogs";

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
element={<Dashboard/>}
/>

<Route
path="/upload"
element={<Upload/>}
/>

<Route
path="/reviews"
element={<Reviews/>}
/>

<Route
path="/audit"
element={<AuditLogs/>}
/>

</Routes>

</BrowserRouter>

)

}

export default App;