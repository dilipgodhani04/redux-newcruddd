
import "./App.css";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Crud from "./component/Crud";
import DataTable from "./component/Table";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact={true} path="/" element={<Home />}></Route>
        <Route path="/crud" element={<Crud />} />
        <Route path="/datatable" element={<DataTable />} />
        <Route path="/edit/:id" element={<Crud />} />
      </Routes>
    </div>
  );
}

export default App;
