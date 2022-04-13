import './App.css';
import MyTable from "./components/MyTable"
import MyPopUp from "./components/MyPopUp"
import {BrowserRouter ,Route, Routes} from "react-router-dom"

function App() {
  return (
	  <BrowserRouter>
		  <Routes>
			  <Route path="/" element={<MyTable/>}/>
			  <Route path="/popup" element={<MyPopUp/>}/>
		  </Routes>
	  </BrowserRouter>
  );
}

export default App;
