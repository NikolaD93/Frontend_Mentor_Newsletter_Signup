import Newsletter from "./components/Newsletter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./components/Success";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-charcoalGrey h-[100vh] flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Newsletter />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
