import "./App.css";
import AddTodofragment from "./component/FragmentCode";
import AddTodoMutation from "./component/MutationCode";
import LoginPage from "./component/Login";
import Welcome from "./component/AfterLogin"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <AddTodoMutation/>
      <h1>------------------------</h1>
     <AddTodofragment/> */}
        <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/welcome" element={< Welcome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
