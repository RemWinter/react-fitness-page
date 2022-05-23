import { Route, HashRouter as Router, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Guides from "./components/Guides";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  const guideList = [{
    id:1,
    title:'Bench Press',
    muscleGroup: '',
    exerciseImage:'',
    exerciseVideo:'',
    text:''
  }]

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/home/" element={<Home/>}/>
        <Route exact path="/guides/" element={<Guides guideList={guideList}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
