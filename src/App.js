import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feedback from './Screens/Feedback/Feedback';
import Home from "./Screens/Home/Home";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
  );
}

export default App;
