import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Main} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
