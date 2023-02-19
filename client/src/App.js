import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Doctor from './pages/DoctorPortal';
import Patient from './pages/PatientPortal';
import PatientView from './components/PatientViewer/PatientView';
import PDemo from './pages/PatientDemo';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Doctor />} />
          <Route path='/patient' element={<Patient />} />
          <Route path='/patient-demo' element={<PDemo />} />
          <Route path='/view' element={<PatientView />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
