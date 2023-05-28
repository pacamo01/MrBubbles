import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './Screens/AboutUs/AboutUs';
import ContactUs from './Screens/ContactUs/ContactUS';
import Feedback from './Screens/Feedback/Feedback';
import Home from "./Screens/Home/Home";
import Service from './Screens/Service/Service';
import Service1 from './Screens/Service/Service1/Service1';
import Service2 from './Screens/Service/Service2/Service2';
import Service3 from './Screens/Service/Service3/Service3';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service1" element={<Service1 />} />
          <Route path="/service2" element={<Service2 />} />
          <Route path="/service3" element={<Service3 />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
  );
}

export default App;
