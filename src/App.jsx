// import {HashRouter as Router, Routes, Route} from 'react-router-dom'
// import Login from "./components/Login"
// import Signup from "./components/Signup"
// import MainPage from './components/MainPage'
// import Contactus from './components/Contactus'
//
//
// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/contact-us" element={<Contactus />} />
//         <Route path="/mainPage" element={<MainPage />} />
//       </Routes>
//     </>
//   )
// }
//
// export default App
//


import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import MainPage from './components/MainPage';
import Contactus from './components/Contactus';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact-us" element={<Contactus />} />
                <Route path="/mainPage" element={<MainPage />} />
            </Routes>
        </Router>
    );
}

export default App;