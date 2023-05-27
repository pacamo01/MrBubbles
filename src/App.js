import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Screens/AboutUs/AboutUs';
import ContactUs from './Screens/ContactUs/ContactUS';
import Feedback from './Screens/Feedback/Feedback';
import Home from "./Screens/Home/Home";
import Service from './Screens/Service/Service';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/service" element={<Service />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
  );
}

export default App;
