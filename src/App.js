
import './App.css';
import ReactRouter from "./Components/Router/ReactRouter";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <div className="App">
      <ToastContainer/>
      <ReactRouter />
    </div>
  );
}

export default App;
