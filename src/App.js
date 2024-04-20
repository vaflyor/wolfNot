import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Referral from "./pages/Referral";
import Boost from "./pages/Boost";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/referral' element={<Referral />} />
                    <Route path='/boost' element={<Boost />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}
export default App;
